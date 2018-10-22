var DdConstruction;
(function (DdConstruction) {
    angular.module('angularApp', [
        'ngCart',
        'siteConstants',
        'ngAnimate',
        'toastr',
        'cgBusy'
    ]);
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