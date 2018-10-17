using System;
using System.Collections.Generic;

namespace DdConstruction
{
    public partial class CustomerOrder
    {
        public CustomerOrder()
        {
            CustomerProductOrder = new HashSet<CustomerProductOrder>();
        }

        public int OrderId { get; set; }
        public DateTime CreateDate { get; set; }
        public int OrderStatusId { get; set; }
        public DateTime? FulfilledDate { get; set; }

        public MdOrderStatus OrderStatus { get; set; }
        public ICollection<CustomerProductOrder> CustomerProductOrder { get; set; }
    }
}
