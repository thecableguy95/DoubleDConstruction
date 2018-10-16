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
        public static readonly $inject: string[] = ['$http', 'DdConstructionClient'];

        private http: ng.IHttpService;
        private paths: IPaths;

        public ddConstructionClient: IDdConstructionClient;
        public catalogItems: Product[];

        constructor($http: ng.IHttpService, ddConstructionClient: IDdConstructionClient) {
            this.http = $http;
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