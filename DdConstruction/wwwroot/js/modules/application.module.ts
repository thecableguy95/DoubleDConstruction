namespace DdConstruction {
    'use strict';

    angular.module('angularApp', [
        'ngCart',
        'siteConstants',
        'ngAnimate',
        'toastr',
        'cgBusy'
    ]);

    const app = angular.module('angularApp')

    app.run(setup);

    setup.$inject = ['ngCart'];

    function setup(ngCart: any): void {
        ngCart.setTaxRate(7.5);
        ngCart.setShipping(4.99);
    }
}