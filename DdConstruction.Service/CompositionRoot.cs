using System;
using DdConstruction.Service.Internal;
using Microsoft.Extensions.DependencyInjection;

namespace DdConstruction.Service
{
    public static class CompositionRoot
    {
        public static void AddDdConstructionService(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            services.AddTransient<IProductService, ProductService>();

            services.AddTransient<IOrderService, OrderService>();
        }
    }
}