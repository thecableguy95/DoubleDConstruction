var DdConstruction;
(function (DdConstruction) {
    'use strict';
    var CustomCheckoutComponent = {
        bindings: {},
        templateUrl: ['paths', function (paths) { return paths.appBase + "custom-checkout/custom-checkout.html"; }],
        controller: 'CustomCheckoutController'
    };
    var CustomCheckoutController = /** @class */ (function () {
        function CustomCheckoutController($http, ngCart) {
            var _this = this;
            this.$onInit = function () {
                _this.cartTotal = "999";
            };
            this.GetCartTotal = function () {
                return _this.cartTotal;
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