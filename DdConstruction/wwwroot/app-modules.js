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
        appBase: siteRoot + "appBase/"
    };
    siteConstants.constant('paths', paths);
})(DdConstruction || (DdConstruction = {}));