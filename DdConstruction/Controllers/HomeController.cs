using System.Diagnostics;
using DdConstruction.Models;
using Microsoft.AspNetCore.Mvc;

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
        public IActionResult CheckoutPost(string data)
        {
            return RedirectToAction("Payment");

            //return View(new CheckoutPost());
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
