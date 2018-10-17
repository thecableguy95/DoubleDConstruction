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
