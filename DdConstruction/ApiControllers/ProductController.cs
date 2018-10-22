using System.Collections.Generic;
using System.Linq;
using DdConstruction.Service;
using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;

namespace DdConstruction.ApiControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService productService;

        public ProductController(IProductService productService)
        {
            this.productService = productService ?? throw new System.ArgumentNullException(nameof(productService));
        }

        [HttpGet]
        [SwaggerOperation("GetAllProducts")]
        [ProducesResponseType(typeof(List<Product>), 200)]
        public ActionResult<List<Product>> GetAll() => productService.GetAllProducts().ToList();
    }
}