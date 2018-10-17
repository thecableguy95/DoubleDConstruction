namespace DdConstruction.DomainModel
{
    public class ServiceConfiguration
    {
        public string SqlServerConnectionString { get; set; }

        public string StripePublicKey { get; set; }

        public string StripeSecretKey { get; set; }
    }
}