namespace DdConstruction.DomainModel
{
    public static class Constants
    {
        public enum OrderStatus
        {
            PendingCharge = 1,
            PendingFulfill = 2,
            Cancelled = 3,
            Fulfilled = 4
        }
    }
}