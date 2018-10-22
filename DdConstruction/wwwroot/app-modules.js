var DdConstruction;
(function (DdConstruction) {
    'use strict';
    angular.module('angularApp', [
        'ngCart',
        'siteConstants',
        'ngAnimate',
        'toastr',
        'cgBusy'
    ]);
    var app = angular.module('angularApp');
    app.run(setup);
    setup.$inject = ['ngCart'];
    function setup(ngCart) {
        ngCart.setTaxRate(7.5);
        ngCart.setShipping(4.99);
    }
})(DdConstruction || (DdConstruction = {}));

var DdConstruction;
(function (DdConstruction) {
    'use strict';
    var siteConstants = angular.module('siteConstants', []);
    var siteRoot = '/';
    var paths = {
        AppBase: siteRoot + "AppBase/",
        AddToCartDirectory: siteRoot + "template/ngCart/addtocart.html",
        ImagesDirectory: siteRoot + "Images/"
    };
    siteConstants.constant('paths', paths);
})(DdConstruction || (DdConstruction = {}));