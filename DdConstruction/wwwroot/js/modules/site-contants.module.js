var DdConstruction;
(function (DdConstruction) {
    'use strict';
    var siteConstants = angular.module('siteConstants', []);
    var siteRoot = '/';
    var paths = {
        AppBase: siteRoot + "AppBase/",
        AddToCartDirectory: siteRoot + "template/ngCart/addtocart.html"
    };
    siteConstants.constant('paths', paths);
})(DdConstruction || (DdConstruction = {}));
