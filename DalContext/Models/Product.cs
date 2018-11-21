using System;
using System.Collections.Generic;

namespace DdConstruction
{
    public partial class Product
    {
        public Product()
        {
            CustomerProductOrder = new HashSet<CustomerProductOrder>();
        }

        public int ProductId { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public string AltDescription { get; set; }
        public bool? OnSale { get; set; }

        public ICollection<CustomerProductOrder> CustomerProductOrder { get; set; }
    }
}
