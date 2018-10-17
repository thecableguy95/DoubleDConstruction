namespace DdConstruction {
    'use strict';

    const CustomCheckoutComponent: ng.IComponentOptions = {
        bindings: {
        },
        templateUrl: ['paths', (paths: IPaths): string => `${paths.AppBase}custom-checkout/custom-checkout.html`],
        controller: 'CustomCheckoutController'
    }

    export interface ICustomCheckoutController extends ng.IController {
        streetAddress: string;
        city: string;
        state: string;
        zipCode: string;
        GetCartTotal(): string;
        IsCartEmpty(): boolean;
        GetCartItemIds(): string[];
    }

    class CustomCheckoutController implements ICustomCheckoutController {
        public static readonly $inject: string[] = ['$http', 'ngCart'];

        private http: ng.IHttpService;
        private ngCart: any;

        public streetAddress: string;
        public city: string;
        public state: string;
        public zipCode: string;
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

        public GetCartItemIds = (): string[] => {
            let cartItems: any = this.ngCart.getItems();

            let itemIds: string[] = [];

            angular.forEach(cartItems, function (value) {
                itemIds.push(value.getId() + "~" + value.getQuantity() + ",");
            });

            if (itemIds.length > 0) {
                itemIds.splice(itemIds.length);
            }

            return itemIds;
        }

        public IsCartEmpty = (): boolean => {
            return this.ngCart.getTotalItems() === 0;
        }
    }

    angular.module('angularApp')
        .component('customCheckout', CustomCheckoutComponent)
        .controller('CustomCheckoutController', CustomCheckoutController);
}