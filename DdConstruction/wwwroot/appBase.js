/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.3.5.0 (NJsonSchema v9.4.5.0) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DdConstruction;
(function (DdConstruction) {
    var Client;
    (function (Client) {
        var DdConstructionClient = /** @class */ (function () {
            function DdConstructionClient($http, $q, baseUrl) {
                this.baseUrl = undefined;
                this.jsonParseReviver = undefined;
                this.http = $http;
                this.q = $q;
                this.baseUrl = baseUrl ? baseUrl : "http://localhost:49847";
            }
            DdConstructionClient.prototype.getAllProducts = function () {
                var _this = this;
                var url_ = this.baseUrl + "/api/Product";
                url_ = url_.replace(/[?&]$/, "");
                var options_ = {
                    url: url_,
                    method: "GET",
                    transformResponse: [],
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                };
                return this.http(options_).then(function (_response) {
                    return _this.processGetAllProducts(_response);
                }, function (_response) {
                    if (_response.status)
                        return _this.processGetAllProducts(_response);
                    throw _response;
                });
            };
            DdConstructionClient.prototype.processGetAllProducts = function (response) {
                var status = response.status;
                if (status === 200) {
                    var _responseText = response.data;
                    var result200 = null;
                    var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                            var item = resultData200_1[_i];
                            result200.push(Product.fromJS(item));
                        }
                    }
                    return this.q.resolve(result200);
                }
                else if (status !== 200 && status !== 204) {
                    var _responseText = response.data;
                    return throwException(this.q, "An unexpected server error occurred.", status, _responseText);
                }
                return this.q.resolve(null);
            };
            return DdConstructionClient;
        }());
        Client.DdConstructionClient = DdConstructionClient;
        var Product = /** @class */ (function () {
            function Product(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            Product.prototype.init = function (data) {
                if (data) {
                    this.productId = data["productId"] !== undefined ? data["productId"] : null;
                    this.price = data["price"] !== undefined ? data["price"] : null;
                    this.description = data["description"] !== undefined ? data["description"] : null;
                    if (data["customerProductOrder"] && data["customerProductOrder"].constructor === Array) {
                        this.customerProductOrder = [];
                        for (var _i = 0, _a = data["customerProductOrder"]; _i < _a.length; _i++) {
                            var item = _a[_i];
                            this.customerProductOrder.push(CustomerProductOrder.fromJS(item));
                        }
                    }
                }
            };
            Product.fromJS = function (data) {
                var result = new Product();
                result.init(data);
                return result;
            };
            Product.prototype.toJSON = function (data) {
                data = typeof data === 'object' ? data : {};
                data["productId"] = this.productId !== undefined ? this.productId : null;
                data["price"] = this.price !== undefined ? this.price : null;
                data["description"] = this.description !== undefined ? this.description : null;
                if (this.customerProductOrder && this.customerProductOrder.constructor === Array) {
                    data["customerProductOrder"] = [];
                    for (var _i = 0, _a = this.customerProductOrder; _i < _a.length; _i++) {
                        var item = _a[_i];
                        data["customerProductOrder"].push(item.toJSON());
                    }
                }
                return data;
            };
            return Product;
        }());
        Client.Product = Product;
        var CustomerProductOrder = /** @class */ (function () {
            function CustomerProductOrder(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            CustomerProductOrder.prototype.init = function (data) {
                if (data) {
                    this.customerProductOrder1 = data["customerProductOrder1"] !== undefined ? data["customerProductOrder1"] : null;
                    this.productId = data["productId"] !== undefined ? data["productId"] : null;
                    this.quantity = data["quantity"] !== undefined ? data["quantity"] : null;
                    this.orderId = data["orderId"] !== undefined ? data["orderId"] : null;
                    this.order = data["order"] ? CustomerOrder.fromJS(data["order"]) : null;
                    this.product = data["product"] ? Product.fromJS(data["product"]) : null;
                }
            };
            CustomerProductOrder.fromJS = function (data) {
                var result = new CustomerProductOrder();
                result.init(data);
                return result;
            };
            CustomerProductOrder.prototype.toJSON = function (data) {
                data = typeof data === 'object' ? data : {};
                data["customerProductOrder1"] = this.customerProductOrder1 !== undefined ? this.customerProductOrder1 : null;
                data["productId"] = this.productId !== undefined ? this.productId : null;
                data["quantity"] = this.quantity !== undefined ? this.quantity : null;
                data["orderId"] = this.orderId !== undefined ? this.orderId : null;
                data["order"] = this.order ? this.order.toJSON() : null;
                data["product"] = this.product ? this.product.toJSON() : null;
                return data;
            };
            return CustomerProductOrder;
        }());
        Client.CustomerProductOrder = CustomerProductOrder;
        var CustomerOrder = /** @class */ (function () {
            function CustomerOrder(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            CustomerOrder.prototype.init = function (data) {
                if (data) {
                    this.orderId = data["orderId"] !== undefined ? data["orderId"] : null;
                    this.createDate = data["createDate"] ? new Date(data["createDate"].toString()) : null;
                    this.orderStatusId = data["orderStatusId"] !== undefined ? data["orderStatusId"] : null;
                    this.fulfilledDate = data["fulfilledDate"] ? new Date(data["fulfilledDate"].toString()) : null;
                    this.orderStatus = data["orderStatus"] ? MdOrderStatus.fromJS(data["orderStatus"]) : null;
                    if (data["customerProductOrder"] && data["customerProductOrder"].constructor === Array) {
                        this.customerProductOrder = [];
                        for (var _i = 0, _a = data["customerProductOrder"]; _i < _a.length; _i++) {
                            var item = _a[_i];
                            this.customerProductOrder.push(CustomerProductOrder.fromJS(item));
                        }
                    }
                }
            };
            CustomerOrder.fromJS = function (data) {
                var result = new CustomerOrder();
                result.init(data);
                return result;
            };
            CustomerOrder.prototype.toJSON = function (data) {
                data = typeof data === 'object' ? data : {};
                data["orderId"] = this.orderId !== undefined ? this.orderId : null;
                data["createDate"] = this.createDate ? this.createDate.toISOString() : null;
                data["orderStatusId"] = this.orderStatusId !== undefined ? this.orderStatusId : null;
                data["fulfilledDate"] = this.fulfilledDate ? this.fulfilledDate.toISOString() : null;
                data["orderStatus"] = this.orderStatus ? this.orderStatus.toJSON() : null;
                if (this.customerProductOrder && this.customerProductOrder.constructor === Array) {
                    data["customerProductOrder"] = [];
                    for (var _i = 0, _a = this.customerProductOrder; _i < _a.length; _i++) {
                        var item = _a[_i];
                        data["customerProductOrder"].push(item.toJSON());
                    }
                }
                return data;
            };
            return CustomerOrder;
        }());
        Client.CustomerOrder = CustomerOrder;
        var MdOrderStatus = /** @class */ (function () {
            function MdOrderStatus(data) {
                if (data) {
                    for (var property in data) {
                        if (data.hasOwnProperty(property))
                            this[property] = data[property];
                    }
                }
            }
            MdOrderStatus.prototype.init = function (data) {
                if (data) {
                    this.orderStatusId = data["orderStatusId"] !== undefined ? data["orderStatusId"] : null;
                    this.description = data["description"] !== undefined ? data["description"] : null;
                    if (data["customerOrder"] && data["customerOrder"].constructor === Array) {
                        this.customerOrder = [];
                        for (var _i = 0, _a = data["customerOrder"]; _i < _a.length; _i++) {
                            var item = _a[_i];
                            this.customerOrder.push(CustomerOrder.fromJS(item));
                        }
                    }
                }
            };
            MdOrderStatus.fromJS = function (data) {
                var result = new MdOrderStatus();
                result.init(data);
                return result;
            };
            MdOrderStatus.prototype.toJSON = function (data) {
                data = typeof data === 'object' ? data : {};
                data["orderStatusId"] = this.orderStatusId !== undefined ? this.orderStatusId : null;
                data["description"] = this.description !== undefined ? this.description : null;
                if (this.customerOrder && this.customerOrder.constructor === Array) {
                    data["customerOrder"] = [];
                    for (var _i = 0, _a = this.customerOrder; _i < _a.length; _i++) {
                        var item = _a[_i];
                        data["customerOrder"].push(item.toJSON());
                    }
                }
                return data;
            };
            return MdOrderStatus;
        }());
        Client.MdOrderStatus = MdOrderStatus;
        var SwaggerException = /** @class */ (function (_super) {
            __extends(SwaggerException, _super);
            function SwaggerException(message, status, response, result) {
                var _this = _super.call(this) || this;
                _this.message = message;
                _this.status = status;
                _this.response = response;
                _this.result = result;
                return _this;
            }
            return SwaggerException;
        }(Error));
        Client.SwaggerException = SwaggerException;
        function throwException(q, message, status, response, result) {
            if (result !== null && result !== undefined)
                return q.reject(result);
            else
                return q.reject(new SwaggerException(message, status, response, null));
        }
        function blobToText(blob, q) {
            return new q(function (resolve) {
                var reader = new FileReader();
                reader.onload = function () {
                    resolve(this.result);
                };
                reader.readAsText(blob);
            });
        }
        // build angular registrations for the client(s)
        var clientClasses = { 'DdConstructionClient': DdConstructionClient };
        for (var clientClass in clientClasses) {
            if (clientClasses.hasOwnProperty(clientClass)) {
                angular.module('angularApp').service(clientClass, ['$http', '$q', clientClasses[clientClass]]);
            }
        }
    })(Client = DdConstruction.Client || (DdConstruction.Client = {}));
})(DdConstruction || (DdConstruction = {}));

var DdConstruction;
(function (DdConstruction) {
    'use strict';
    var ClearCartComponent = {
        bindings: {},
        templateUrl: ['paths', function (paths) { return paths.AppBase + "clear-cart/clear-cart.html"; }],
        controller: 'ClearCartController'
    };
    var ClearCartController = /** @class */ (function () {
        function ClearCartController(ngCart, toastr) {
            var _this = this;
            this.$onInit = function () {
                _this.ngCart.empty();
                _this.toastr.success("Order was received successfully!");
            };
            this.ngCart = ngCart;
            this.toastr = toastr;
        }
        ClearCartController.$inject = ['ngCart', 'toastr'];
        return ClearCartController;
    }());
    angular.module('angularApp')
        .component('clearCart', ClearCartComponent)
        .controller('ClearCartController', ClearCartController);
})(DdConstruction || (DdConstruction = {}));

var DdConstruction;
(function (DdConstruction) {
    'use strict';
    var CustomCheckoutComponent = {
        bindings: {},
        templateUrl: ['paths', function (paths) { return paths.AppBase + "custom-checkout/custom-checkout.html"; }],
        controller: 'CustomCheckoutController'
    };
    var CustomCheckoutController = /** @class */ (function () {
        function CustomCheckoutController($http, ngCart) {
            var _this = this;
            this.$onInit = function () {
            };
            this.GetCartTotal = function () {
                var total = (Math.round(_this.ngCart.totalCost() * 100)).toString();
                return total;
            };
            this.GetCartItemInfo = function () {
                var cartItems = _this.ngCart.getItems();
                var itemIds = [];
                angular.forEach(cartItems, function (value) {
                    itemIds.push(value.getId() + "~" + value.getQuantity());
                });
                if (itemIds.length > 0) {
                    itemIds.splice(itemIds.length);
                }
                return itemIds;
            };
            this.IsCartEmpty = function () {
                return _this.ngCart.getTotalItems() === 0;
            };
            this.http = $http;
            this.ngCart = ngCart;
        }
        CustomCheckoutController.$inject = ['$http', 'ngCart'];
        return CustomCheckoutController;
    }());
    angular.module('angularApp')
        .component('customCheckout', CustomCheckoutComponent)
        .controller('CustomCheckoutController', CustomCheckoutController);
})(DdConstruction || (DdConstruction = {}));

var DdConstruction;
(function (DdConstruction) {
    'use strict';
    var ProductCatalogComponent = {
        bindings: {},
        templateUrl: ['paths', function (paths) { return paths.AppBase + "product-catalog/product-catalog.html"; }],
        controller: 'ProductCatalogController'
    };
    var ProductCatalogController = /** @class */ (function () {
        function ProductCatalogController(ddConstructionClient) {
            var _this = this;
            this.$onInit = function () {
                _this.ddConstructionClient.getAllProducts().then(function (products) {
                    _this.catalogItems = products;
                });
            };
            this.ddConstructionClient = ddConstructionClient;
        }
        ProductCatalogController.$inject = ['DdConstructionClient'];
        return ProductCatalogController;
    }());
    angular.module('angularApp')
        .component('productCatalog', ProductCatalogComponent)
        .controller('ProductCatalogController', ProductCatalogController);
})(DdConstruction || (DdConstruction = {}));