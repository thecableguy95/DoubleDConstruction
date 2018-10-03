using System.Collections.Generic;
using System.Linq;
using DalContext.Models;
using Microsoft.AspNetCore.Mvc;

namespace DdConstruction.ApiControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly DoubleDConstructionContext context;

        public ProductController(DoubleDConstructionContext context) => this.context = context;

        [HttpGet]
        public ActionResult<List<Product>> GetAll()
        {
            return context.Product.ToList();
        }
    }
}