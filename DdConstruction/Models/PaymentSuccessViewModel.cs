namespace DdConstruction.Models
{
    public class PaymentSuccessViewModel : BaseIndexViewModel
    {
        private static readonly string angularApplicationName = "angularApp";

        public PaymentSuccessViewModel() : base(angularApplicationName) { }

        public string OrderId { get; set; }
    }
}