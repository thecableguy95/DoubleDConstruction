using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text.RegularExpressions;
using DdConstruction.Models;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace DdConstruction.Controllers
{
    public class HomeController : Controller
    {
        private readonly DoubleDConstructionContext context;

        public HomeController(DoubleDConstructionContext context) => this.context = context;

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
        public IActionResult CheckoutPost(string stripeToken, string cartTotal, string streetAddress, string city, string state, string zipCode, string cartItemInfo)
        {
            int amount = int.Parse(cartTotal);

            // Get the ProductIds from the cartItems
            var products = new Dictionary<int, int>();

            foreach (var item in cartItemInfo.Split(','))
            {
                products.Add(SanitizeProductdId(item), SanitizeItemQuantity(item));
            }

            // Need to save the order to our database
            var customerOrder = new CustomerOrder { CreateDate = DateTime.UtcNow, OrderStatusId = 1, FulfilledDate = null };
            context.CustomerOrder.Add(customerOrder);

            context.SaveChanges();

            var orderId = customerOrder.OrderId;

            foreach (var productId in products.Keys)
            {
                var customerProductOrder = new CustomerProductOrder { ProductId = productId, OrderId = orderId, Quantity = products[productId] };
                context.CustomerProductOrder.Add(customerProductOrder);
            }

            context.SaveChanges();

            // Set your secret key: remember to change this to your live secret key in production
            // See your keys here: https://dashboard.stripe.com/account/apikeys
            StripeConfiguration.SetApiKey("sk_test_47M1I8EA24tScfkSjYCC7Lj0");

            var options = new StripeChargeCreateOptions
            {
                Amount = amount,
                Currency = "usd",
                Description = "Example charge",
                SourceTokenOrExistingSourceId = stripeToken
            };
            var service = new StripeChargeService();
            StripeCharge charge = service.Create(options);

            if (charge.Outcome.Type != "authorized")
            {
                // something went wrong, payment failed
                return RedirectToAction("PaymentFailed", new { charge });
            }

            return PaymentSuccess(charge);
        }

        public IActionResult PaymentSuccess(StripeCharge charge)
        {
            return View(new PaymentSuccessViewModel());
        }

        public IActionResult PaymentFailed(StripeCharge charge)
        {
            return View(new PaymentFailedViewModel());
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
    }
}
