using System;
using System.Collections.Generic;

namespace DdConstruction
{
    public partial class CustomerOrderShipping
    {
        public int CustomerOrderShippingId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public int OrderId { get; set; }

        public CustomerOrder Order { get; set; }
    }
}
