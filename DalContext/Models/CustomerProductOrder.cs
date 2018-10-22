using System;
using System.Collections.Generic;

namespace DdConstruction
{
    public partial class CustomerProductOrder
    {
        public int CustomerProductOrderId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public int OrderId { get; set; }

        public CustomerOrder Order { get; set; }
        public Product Product { get; set; }
    }
}
