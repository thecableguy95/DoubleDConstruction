namespace DdConstruction {
    'use strict';

    const CustomCheckoutComponent: ng.IComponentOptions = {
        bindings: {
        },
        templateUrl: ['paths', (paths: IPaths): string => `${paths.appBase}custom-checkout/custom-checkout.html`],
        controller: 'CustomCheckoutController'
    }

    export interface ICustomCheckoutController extends ng.IController {
        cartTotal: string;
    }

    class CustomCheckoutController implements ICustomCheckoutController {
        public static readonly $inject: string[] = ['$http', 'ngCart'];

        private http: ng.IHttpService;
        private ngCart: any;

        public cartTotal: string;

        constructor($http: ng.IHttpService, ngCart: any) {
            this.http = $http;
            this.ngCart = ngCart;
        }

        public $onInit = (): void => {
            this.cartTotal = "999";
        }

        public GetCartTotal = (): string => {
            return this.cartTotal;
        }
    }

    angular.module('angularApp')
        .component('customCheckout', CustomCheckoutComponent)
        .controller('CustomCheckoutController', CustomCheckoutController);
}