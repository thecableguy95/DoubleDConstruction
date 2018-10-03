using System.Collections.Generic;

namespace DalContext.Models
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

        public ICollection<CustomerProductOrder> CustomerProductOrder { get; set; }
    }
}
