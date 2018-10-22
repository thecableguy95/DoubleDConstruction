namespace DdConstruction.Models
{
    public class PaymentFailedViewModel : BaseIndexViewModel
    {
        private static readonly string angularApplicationName = "angularApp";

        public PaymentFailedViewModel() : base(angularApplicationName) { }

        public string Reason { get; set; }
    }
}