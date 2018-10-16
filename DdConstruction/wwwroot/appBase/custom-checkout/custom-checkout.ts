namespace DdConstruction {
    'use strict';

    const CustomCheckoutComponent: ng.IComponentOptions = {
        bindings: {
        },
        templateUrl: ['paths', (paths: IPaths): string => `${paths.AppBase}custom-checkout/custom-checkout.html`],
        controller: 'CustomCheckoutController'
    }

    export interface ICustomCheckoutController extends ng.IController {
        GetCartTotal(): string;
        IsCartEmpty(): boolean;
        GetCartItems(): any[];
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
        }

        public GetCartTotal = (): string => {
            let total = (Math.round(this.ngCart.totalCost() * 100)).toString();

            return total;
        }

        public GetCartItems = (): any[] => {
            return this.ngCart.getItems();
        }

        public IsCartEmpty = (): boolean => {
            return this.ngCart.getTotalItems() === 0;
        }
    }

    angular.module('angularApp')
        .component('customCheckout', CustomCheckoutComponent)
        .controller('CustomCheckoutController', CustomCheckoutController);
}