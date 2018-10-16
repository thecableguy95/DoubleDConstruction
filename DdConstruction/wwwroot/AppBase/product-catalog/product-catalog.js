var DdConstruction;
(function (DdConstruction) {
    'use strict';
    var ProductCatalogComponent = {
        bindings: {},
        templateUrl: ['paths', function (paths) { return paths.AppBase + "product-catalog/product-catalog.html"; }],
        controller: 'ProductCatalogController'
    };
    var ProductCatalogController = /** @class */ (function () {
        function ProductCatalogController($http, ddConstructionClient) {
            var _this = this;
            this.$onInit = function () {
                _this.ddConstructionClient.getAllProducts().then(function (products) {
                    _this.catalogItems = products;
                });
            };
            this.http = $http;
            this.ddConstructionClient = ddConstructionClient;
        }
        ProductCatalogController.$inject = ['$http', 'DdConstructionClient'];
        return ProductCatalogController;
    }());
    angular.module('angularApp')
        .component('productCatalog', ProductCatalogComponent)
        .controller('ProductCatalogController', ProductCatalogController);
})(DdConstruction || (DdConstruction = {}));
