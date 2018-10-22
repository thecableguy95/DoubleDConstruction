using System.Collections.Generic;
using DdConstruction.DomainModel;

namespace DdConstruction.Service
{
    public interface IOrderService
    {
        CustomerOrder GetOrderById(int id);
        int SaveCustomerOrder(CustomerOrder order, Dictionary<int, int> orderedProducts, ShippingModel shippingModel);

        void UpdateCustomerOrder(CustomerOrder order);
    }
}