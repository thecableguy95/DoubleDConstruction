namespace DalContext.Models
{
    public partial class CustomerProductOrder
    {
        public int CustomerProductOrder1 { get; set; }
        public int? ProductId { get; set; }
        public int? OrderId { get; set; }

        public CustomerOrder Order { get; set; }
        public Product Product { get; set; }
    }
}
