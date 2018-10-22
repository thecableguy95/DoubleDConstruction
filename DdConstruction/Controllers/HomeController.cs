using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.RegularExpressions;
using DdConstruction.DomainModel;
using DdConstruction.Models;
using DdConstruction.Service;
using Microsoft.AspNetCore.Mvc;
using Stripe;
using static DdConstruction.DomainModel.Constants;

namespace DdConstruction.Controllers
{
    public class HomeController : Controller
    {
        private readonly IOrderService orderService;
        private readonly IProductService productService;
        private readonly ServiceConfiguration serviceConfiguration;

        public HomeController(IOrderService orderService, IProductService productService, ServiceConfiguration serviceConfiguration)
        {
            this.orderService = orderService ?? throw new ArgumentNullException(nameof(orderService));
            this.productService = productService ?? throw new ArgumentNullException(nameof(productService));
            this.serviceConfiguration = serviceConfiguration ?? throw new ArgumentNullException(nameof(serviceConfiguration));
        }

        public IActionResult Index()
        {
            return View(new IndexViewModel());
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View(new AboutViewModel());
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View(new ContactViewModel());
        }

        public IActionResult Checkout()
        {
            ViewData["Message"] = "Your Checkout page.";

            return View(new CheckoutViewModel());
        }

        [HttpPost]
        public IActionResult CheckoutPost(string stripeToken, string cartTotal, string customerName, string streetAddress, string city, string state, string zipCode, string cartItemInfo)
        {
            int amount = int.Parse(cartTotal);

            // Get the ProductIds from the cartItems
            var products = new Dictionary<int, int>();

            foreach (var item in cartItemInfo.Split(','))
            {
                products.Add(SanitizeProductdId(item), SanitizeItemQuantity(item));
            }

            // Validate the items equate to the cartTotal we received
            var productEntities = productService.GetAllProducts().Where(m => products.ContainsKey(m.ProductId)).ToList();

            if (!ValidCartAmount(productEntities, amount))
            {
                // We've got a problem
                return RedirectToAction("PaymentFailed", new { reason = "Cart total has been corrupt" });
            }

            // Need to save the order to our database
            var customerOrder = new CustomerOrder { CreateDate = DateTime.UtcNow, OrderStatusId = (int)OrderStatus.PendingCharge, FulfilledDate = null };
            var shippingModel = new ShippingModel { Name = customerName, Address = streetAddress, City = city, State = state, ZipCode = zipCode };

            var orderId = orderService.SaveCustomerOrder(customerOrder, products, shippingModel);

            var metaData = new Dictionary<string, string>
            {
                { "OrderId", orderId.ToString() }
            };

            // Set your secret key: remember to change this to your live secret key in production
            // See your keys here: https://dashboard.stripe.com/account/apikeys
            StripeConfiguration.SetApiKey(serviceConfiguration.StripeSecretKey);

            var options = new StripeChargeCreateOptions
            {
                Amount = amount,
                Currency = "usd",
                Description = "Example charge",
                SourceTokenOrExistingSourceId = stripeToken,
                Metadata = metaData
            };
            var service = new StripeChargeService();
            StripeCharge charge = service.Create(options);

            if (charge.Outcome.Type != "authorized")
            {
                // something went wrong, payment failed
                return RedirectToAction("PaymentFailed", new { reason = "Credit card is invalid" });
            }

            customerOrder.StripePaymentId = charge.Id;
            customerOrder.OrderStatusId = (int)OrderStatus.PendingFulfill;
            orderService.UpdateCustomerOrder(customerOrder);

            return RedirectToAction("PaymentSuccess", new { orderId });
        }

        // Requires StripeCharge from TempData
        public IActionResult PaymentSuccess(string orderId)
        {
            return View(new PaymentSuccessViewModel { OrderId = orderId });
        }

        // Requires StripeCharge from TempData
        public IActionResult PaymentFailed(string reason)
        {
            return View(new PaymentFailedViewModel { Reason = reason });
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        private int SanitizeProductdId(string item)
        {
            var productId = Regex.Replace(item, "[^0-9~]", "");

            return int.Parse(productId.Substring(0, 1));
        }

        private int SanitizeItemQuantity(string item)
        {
            var quantity = Regex.Replace(item, "[^0-9~]", "");

            return int.Parse(quantity.Substring(2, 1));
        }

        private bool ValidCartAmount(List<Product> productEntities, int amount)
        {
            var productEntityTotal = 0;

            foreach (var productEntity in productEntities)
            {
                productEntityTotal += (int)(productEntity.Price * 100);
            }

            return productEntityTotal == amount;
        }
    }
}