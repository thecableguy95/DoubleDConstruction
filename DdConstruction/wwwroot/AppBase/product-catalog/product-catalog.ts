namespace DdConstruction {
    'use strict';

    import IDdConstructionClient = DdConstruction.Client.IDdConstructionClient;
    import Product = DdConstruction.Client.Product;

    const ProductCatalogComponent: ng.IComponentOptions = {
        bindings: {
        },
        templateUrl: ['paths', (paths: IPaths): string => `${paths.AppBase}product-catalog/product-catalog.html`],
        controller: 'ProductCatalogController'
    }

    export interface IProductCatalogController extends ng.IController {
        ddConstructionClient: IDdConstructionClient;
        catalogItems: Product[];
    }

    class ProductCatalogController implements IProductCatalogController {
        public static readonly $inject: string[] = ['DdConstructionClient'];

        public ddConstructionClient: IDdConstructionClient;
        public catalogItems: Product[];

        constructor(ddConstructionClient: IDdConstructionClient) {
            this.ddConstructionClient = ddConstructionClient;
        }

        public $onInit = (): void => {
            this.ddConstructionClient.getAllProducts().then(products => {
                this.catalogItems = products;
            });
        }
    }

    angular.module('angularApp')
        .component('productCatalog', ProductCatalogComponent)
        .controller('ProductCatalogController', ProductCatalogController);
}