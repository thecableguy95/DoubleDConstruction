namespace DdConstruction {
    'use strict'

    export interface IPaths {
        readonly AppBase: string;
        readonly AddToCartDirectory: string;
        readonly ImagesDirectory: string;
    }

    const siteConstants = angular.module('siteConstants', []);

    let siteRoot = '/';

    const paths: IPaths = {
        AppBase: `${siteRoot}AppBase/`,
        AddToCartDirectory: `${siteRoot}template/ngCart/addtocart.html`,
        ImagesDirectory: `${siteRoot}Images/`
    };

    siteConstants.constant('paths', paths);
}