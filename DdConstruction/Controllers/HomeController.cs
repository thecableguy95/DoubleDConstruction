using System.Diagnostics;
using DdConstruction.Models;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace DdConstruction.Controllers
{
    public class HomeController : Controller
    {
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
        public IActionResult CheckoutPost(string stripeToken)
        {
            // Set your secret key: remember to change this to your live secret key in production
            // See your keys here: https://dashboard.stripe.com/account/apikeys
            StripeConfiguration.SetApiKey("sk_test_47M1I8EA24tScfkSjYCC7Lj0");

            var options = new StripeChargeCreateOptions
            {
                Amount = 999,
                Currency = "usd",
                Description = "Example charge",
                SourceTokenOrExistingSourceId = stripeToken,
            };
            var service = new StripeChargeService();
            StripeCharge charge = service.Create(options);

            return RedirectToAction("Payment");
        }

        public IActionResult Payment()
        {
            return View(new PaymentViewModel());
        }

        //[HttpPost]
        //public IActionResult PaymentPost()
        //{

        //}

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
