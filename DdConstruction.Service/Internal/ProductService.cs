using System.Collections.Generic;
using System.Linq;

namespace DdConstruction.Service.Internal
{
    internal class ProductService : IProductService
    {
        private readonly DoubleDConstructionContext context;

        public ProductService(DoubleDConstructionContext context) => this.context = context ?? throw new System.ArgumentNullException(nameof(context));

        public IEnumerable<Product> GetAllProducts() => context.Product.ToList();
    }
}