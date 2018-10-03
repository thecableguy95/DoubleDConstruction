namespace DdConstruction {
    'use strict'

    export interface IPaths {
        readonly AppBase: string;
    }

    const siteConstants = angular.module('siteConstants', []);

    let siteRoot = '/';

    const paths: IPaths = {
        AppBase: `${siteRoot}AppBase/`
    };

    siteConstants.constant('paths', paths);
}