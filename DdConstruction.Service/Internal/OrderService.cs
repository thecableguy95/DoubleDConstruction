using System.Collections.Generic;
using System.Linq;
using DdConstruction.DomainModel;

namespace DdConstruction.Service.Internal
{
    internal class OrderService : IOrderService
    {
        private readonly DoubleDConstructionContext context;

        public OrderService(DoubleDConstructionContext context)
        {
            this.context = context ?? throw new System.ArgumentNullException(nameof(context));
        }

        public CustomerOrder GetOrderById(int id) => context.CustomerOrder.Where(m => m.OrderId == id).FirstOrDefault();

        public int SaveCustomerOrder(CustomerOrder order, Dictionary<int, int> orderedProducts, ShippingModel shippingModel)
        {
            context.CustomerOrder.Add(order);

            context.SaveChanges();

            var orderId = order.OrderId;

            foreach (var productId in orderedProducts.Keys)
            {
                var customerProductOrder = new CustomerProductOrder { ProductId = productId, OrderId = orderId, Quantity = orderedProducts[productId] };
                context.CustomerProductOrder.Add(customerProductOrder);
            }

            var customerOrderShipping = new CustomerOrderShipping { Name = shippingModel.Name, Address = shippingModel.Address, City = shippingModel.City, State = shippingModel.State, ZipCode = shippingModel.ZipCode, OrderId = orderId };
            context.CustomerOrderShipping.Add(customerOrderShipping);

            context.SaveChanges();

            return orderId;
        }

        public void UpdateCustomerOrder(CustomerOrder order)
        {
            context.CustomerOrder.Update(order);
            context.SaveChanges();
        }
    }
}