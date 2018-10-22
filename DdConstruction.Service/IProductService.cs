using System.Collections.Generic;

namespace DdConstruction.Service
{
    public interface IProductService
    {
        IEnumerable<Product> GetAllProducts();
    }
}