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
            this.GetCartItemIds = function () {
                var cartItems = _this.ngCart.getItems();
                var itemIds = [];
                angular.forEach(cartItems, function (value) {
                    itemIds.push(value.getId() + "~" + value.getQuantity() + ",");
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
