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
        GetProductImage: (description: string) => string;
        load: ng.IPromise<void>;
    }

    class ProductCatalogController implements IProductCatalogController {
        public static readonly $inject: string[] = ['DdConstructionClient', 'paths'];

        private paths: IPaths;

        public ddConstructionClient: IDdConstructionClient;
        public catalogItems: Product[];
        public load: ng.IPromise<void>;

        constructor(ddConstructionClient: IDdConstructionClient, paths: IPaths) {
            this.ddConstructionClient = ddConstructionClient;
            this.paths = paths;
        }

        public $onInit = (): void => {
            this.load = this.ddConstructionClient.getAllProducts().then(products => {
                this.catalogItems = products;
            });
        }

        public GetProductImage = (description: string): string => {
            let imageUrl = this.paths.ImagesDirectory + description + ".jpg";
            return imageUrl;
        }
    }

    angular.module('angularApp')
        .component('productCatalog', ProductCatalogComponent)
        .controller('ProductCatalogController', ProductCatalogController);
}