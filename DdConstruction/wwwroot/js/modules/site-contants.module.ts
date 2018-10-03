namespace DdConstruction {
    'use strict'

    export interface IPaths {
        readonly appBase: string;
    }

    const siteConstants = angular.module('siteConstants', []);

    let siteRoot = '/';

    const paths: IPaths = {
        appBase: `${siteRoot}appBase/`
    };

    siteConstants.constant('paths', paths);
}