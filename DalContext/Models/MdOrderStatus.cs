using System.Collections.Generic;

namespace DalContext.Models
{
    public partial class MdOrderStatus
    {
        public MdOrderStatus()
        {
            CustomerOrder = new HashSet<CustomerOrder>();
        }

        public int OrderStatusId { get; set; }
        public string Description { get; set; }

        public ICollection<CustomerOrder> CustomerOrder { get; set; }
    }
}
