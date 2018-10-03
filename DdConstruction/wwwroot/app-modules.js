var DdConstruction;
(function (DdConstruction) {
    angular.module('angularApp', ['ngCart', 'siteConstants']);
})(DdConstruction || (DdConstruction = {}));

var DdConstruction;
(function (DdConstruction) {
    'use strict';
    var siteConstants = angular.module('siteConstants', []);
    var siteRoot = '/';
    var paths = {
        AppBase: siteRoot + "AppBase/"
    };
    siteConstants.constant('paths', paths);
})(DdConstruction || (DdConstruction = {}));