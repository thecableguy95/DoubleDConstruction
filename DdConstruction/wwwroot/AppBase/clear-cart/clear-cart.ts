namespace DdConstruction {
    'use strict';

    const ClearCartComponent: ng.IComponentOptions = {
        bindings: {},
        templateUrl: ['paths', (paths: IPaths): string => `${paths.AppBase}clear-cart/clear-cart.html`],
        controller: 'ClearCartController'
    }

    export interface IClearCartController extends ng.IController {
    }

    class ClearCartController implements IClearCartController {
        public static readonly $inject: string[] = ['ngCart', 'toastr'];

        private ngCart: any;
        private readonly toastr: ng.toastr.IToastrService;

        constructor(ngCart: any, toastr: ng.toastr.IToastrService,) {
            this.ngCart = ngCart;
            this.toastr = toastr;
        }

        public $onInit = (): void => {
            this.ngCart.empty();
            this.toastr.success("Order was received successfully!");
        }
    }

    angular.module('angularApp')
        .component('clearCart', ClearCartComponent)
        .controller('ClearCartController', ClearCartController);
}