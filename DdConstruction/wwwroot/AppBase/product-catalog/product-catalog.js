var DdConstruction;
(function (DdConstruction) {
    'use strict';
    var ProductCatalogComponent = {
        bindings: {},
        templateUrl: ['paths', function (paths) { return paths.AppBase + "product-catalog/product-catalog.html"; }],
        controller: 'ProductCatalogController'
    };
    var ProductCatalogController = /** @class */ (function () {
        function ProductCatalogController(ddConstructionClient, paths) {
            var _this = this;
            this.$onInit = function () {
                _this.load = _this.ddConstructionClient.getAllProducts().then(function (products) {
                    _this.catalogItems = products;
                });
            };
            this.GetProductImage = function (description) {
                var imageUrl = _this.paths.ImagesDirectory + description + ".jpg";
                var xyz = _this.ImageExists(imageUrl);
                return imageUrl;
            };
            this.ImageExists = function (imagePath) {
                var http = new XMLHttpRequest();
                http.open('HEAD', imagePath, false);
                http.send();
                return http.status != 404;
            };
            this.ddConstructionClient = ddConstructionClient;
            this.paths = paths;
        }
        ProductCatalogController.$inject = ['DdConstructionClient', 'paths'];
        return ProductCatalogController;
    }());
    angular.module('angularApp')
        .component('productCatalog', ProductCatalogComponent)
        .controller('ProductCatalogController', ProductCatalogController);
})(DdConstruction || (DdConstruction = {}));
