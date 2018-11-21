﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.3.5.0 (NJsonSchema v9.4.5.0) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

namespace DdConstruction.Client {

export interface IDdConstructionClient {
    getAllProducts(): ng.IPromise<Product[] | null>;
}

export class DdConstructionClient implements IDdConstructionClient {
    private baseUrl: string | undefined = undefined; 
    private http: ng.IHttpService; 
    private q: ng.IQService; 
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor($http: ng.IHttpService, $q: ng.IQService, baseUrl?: string) {
        this.http = $http;
        this.q = $q;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:49847";
    }

    getAllProducts(): ng.IPromise<Product[] | null> {
        let url_ = this.baseUrl + "/api/Product";
        url_ = url_.replace(/[?&]$/, "");

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "GET",
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http(options_).then((_response) => {
            return this.processGetAllProducts(_response);
        }, (_response) => {
            if (_response.status)
                return this.processGetAllProducts(_response);
            throw _response;
        });
    }

    protected processGetAllProducts(response: any): ng.IPromise<Product[] | null> {
        const status = response.status; 

        if (status === 200) {
            const _responseText = response.data;
            let result200: Product[] | null = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(Product.fromJS(item));
            }
            return this.q.resolve(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException(this.q, "An unexpected server error occurred.", status, _responseText);
        }
        return this.q.resolve<Product[] | null>(<any>null);
    }
}

export class Product implements IProduct {
    productId: number;
    price: number;
    description?: string | null;
    altDescription?: string | null;
    onSale?: boolean | null;
    customerProductOrder?: CustomerProductOrder[] | null;

    constructor(data?: IProduct) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.productId = data["productId"] !== undefined ? data["productId"] : <any>null;
            this.price = data["price"] !== undefined ? data["price"] : <any>null;
            this.description = data["description"] !== undefined ? data["description"] : <any>null;
            this.altDescription = data["altDescription"] !== undefined ? data["altDescription"] : <any>null;
            this.onSale = data["onSale"] !== undefined ? data["onSale"] : <any>null;
            if (data["customerProductOrder"] && data["customerProductOrder"].constructor === Array) {
                this.customerProductOrder = [];
                for (let item of data["customerProductOrder"])
                    this.customerProductOrder.push(CustomerProductOrder.fromJS(item));
            }
        }
    }

    static fromJS(data: any): Product {
        let result = new Product();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["productId"] = this.productId !== undefined ? this.productId : <any>null;
        data["price"] = this.price !== undefined ? this.price : <any>null;
        data["description"] = this.description !== undefined ? this.description : <any>null;
        data["altDescription"] = this.altDescription !== undefined ? this.altDescription : <any>null;
        data["onSale"] = this.onSale !== undefined ? this.onSale : <any>null;
        if (this.customerProductOrder && this.customerProductOrder.constructor === Array) {
            data["customerProductOrder"] = [];
            for (let item of this.customerProductOrder)
                data["customerProductOrder"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IProduct {
    productId: number;
    price: number;
    description?: string | null;
    altDescription?: string | null;
    onSale?: boolean | null;
    customerProductOrder?: CustomerProductOrder[] | null;
}

export class CustomerProductOrder implements ICustomerProductOrder {
    customerProductOrderId: number;
    productId: number;
    quantity: number;
    orderId: number;
    order?: CustomerOrder | null;
    product?: Product | null;

    constructor(data?: ICustomerProductOrder) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.customerProductOrderId = data["customerProductOrderId"] !== undefined ? data["customerProductOrderId"] : <any>null;
            this.productId = data["productId"] !== undefined ? data["productId"] : <any>null;
            this.quantity = data["quantity"] !== undefined ? data["quantity"] : <any>null;
            this.orderId = data["orderId"] !== undefined ? data["orderId"] : <any>null;
            this.order = data["order"] ? CustomerOrder.fromJS(data["order"]) : <any>null;
            this.product = data["product"] ? Product.fromJS(data["product"]) : <any>null;
        }
    }

    static fromJS(data: any): CustomerProductOrder {
        let result = new CustomerProductOrder();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["customerProductOrderId"] = this.customerProductOrderId !== undefined ? this.customerProductOrderId : <any>null;
        data["productId"] = this.productId !== undefined ? this.productId : <any>null;
        data["quantity"] = this.quantity !== undefined ? this.quantity : <any>null;
        data["orderId"] = this.orderId !== undefined ? this.orderId : <any>null;
        data["order"] = this.order ? this.order.toJSON() : <any>null;
        data["product"] = this.product ? this.product.toJSON() : <any>null;
        return data; 
    }
}

export interface ICustomerProductOrder {
    customerProductOrderId: number;
    productId: number;
    quantity: number;
    orderId: number;
    order?: CustomerOrder | null;
    product?: Product | null;
}

export class CustomerOrder implements ICustomerOrder {
    orderId: number;
    createDate: Date;
    orderStatusId: number;
    stripePaymentId?: string | null;
    fulfilledDate?: Date | null;
    orderStatus?: MdOrderStatus | null;
    customerOrderShipping?: CustomerOrderShipping[] | null;
    customerProductOrder?: CustomerProductOrder[] | null;

    constructor(data?: ICustomerOrder) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.orderId = data["orderId"] !== undefined ? data["orderId"] : <any>null;
            this.createDate = data["createDate"] ? new Date(data["createDate"].toString()) : <any>null;
            this.orderStatusId = data["orderStatusId"] !== undefined ? data["orderStatusId"] : <any>null;
            this.stripePaymentId = data["stripePaymentId"] !== undefined ? data["stripePaymentId"] : <any>null;
            this.fulfilledDate = data["fulfilledDate"] ? new Date(data["fulfilledDate"].toString()) : <any>null;
            this.orderStatus = data["orderStatus"] ? MdOrderStatus.fromJS(data["orderStatus"]) : <any>null;
            if (data["customerOrderShipping"] && data["customerOrderShipping"].constructor === Array) {
                this.customerOrderShipping = [];
                for (let item of data["customerOrderShipping"])
                    this.customerOrderShipping.push(CustomerOrderShipping.fromJS(item));
            }
            if (data["customerProductOrder"] && data["customerProductOrder"].constructor === Array) {
                this.customerProductOrder = [];
                for (let item of data["customerProductOrder"])
                    this.customerProductOrder.push(CustomerProductOrder.fromJS(item));
            }
        }
    }

    static fromJS(data: any): CustomerOrder {
        let result = new CustomerOrder();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["orderId"] = this.orderId !== undefined ? this.orderId : <any>null;
        data["createDate"] = this.createDate ? this.createDate.toISOString() : <any>null;
        data["orderStatusId"] = this.orderStatusId !== undefined ? this.orderStatusId : <any>null;
        data["stripePaymentId"] = this.stripePaymentId !== undefined ? this.stripePaymentId : <any>null;
        data["fulfilledDate"] = this.fulfilledDate ? this.fulfilledDate.toISOString() : <any>null;
        data["orderStatus"] = this.orderStatus ? this.orderStatus.toJSON() : <any>null;
        if (this.customerOrderShipping && this.customerOrderShipping.constructor === Array) {
            data["customerOrderShipping"] = [];
            for (let item of this.customerOrderShipping)
                data["customerOrderShipping"].push(item.toJSON());
        }
        if (this.customerProductOrder && this.customerProductOrder.constructor === Array) {
            data["customerProductOrder"] = [];
            for (let item of this.customerProductOrder)
                data["customerProductOrder"].push(item.toJSON());
        }
        return data; 
    }
}

export interface ICustomerOrder {
    orderId: number;
    createDate: Date;
    orderStatusId: number;
    stripePaymentId?: string | null;
    fulfilledDate?: Date | null;
    orderStatus?: MdOrderStatus | null;
    customerOrderShipping?: CustomerOrderShipping[] | null;
    customerProductOrder?: CustomerProductOrder[] | null;
}

export class MdOrderStatus implements IMdOrderStatus {
    orderStatusId: number;
    description?: string | null;
    customerOrder?: CustomerOrder[] | null;

    constructor(data?: IMdOrderStatus) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.orderStatusId = data["orderStatusId"] !== undefined ? data["orderStatusId"] : <any>null;
            this.description = data["description"] !== undefined ? data["description"] : <any>null;
            if (data["customerOrder"] && data["customerOrder"].constructor === Array) {
                this.customerOrder = [];
                for (let item of data["customerOrder"])
                    this.customerOrder.push(CustomerOrder.fromJS(item));
            }
        }
    }

    static fromJS(data: any): MdOrderStatus {
        let result = new MdOrderStatus();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["orderStatusId"] = this.orderStatusId !== undefined ? this.orderStatusId : <any>null;
        data["description"] = this.description !== undefined ? this.description : <any>null;
        if (this.customerOrder && this.customerOrder.constructor === Array) {
            data["customerOrder"] = [];
            for (let item of this.customerOrder)
                data["customerOrder"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IMdOrderStatus {
    orderStatusId: number;
    description?: string | null;
    customerOrder?: CustomerOrder[] | null;
}

export class CustomerOrderShipping implements ICustomerOrderShipping {
    customerOrderShippingId: number;
    name?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zipCode?: string | null;
    orderId: number;
    order?: CustomerOrder | null;

    constructor(data?: ICustomerOrderShipping) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.customerOrderShippingId = data["customerOrderShippingId"] !== undefined ? data["customerOrderShippingId"] : <any>null;
            this.name = data["name"] !== undefined ? data["name"] : <any>null;
            this.address = data["address"] !== undefined ? data["address"] : <any>null;
            this.city = data["city"] !== undefined ? data["city"] : <any>null;
            this.state = data["state"] !== undefined ? data["state"] : <any>null;
            this.zipCode = data["zipCode"] !== undefined ? data["zipCode"] : <any>null;
            this.orderId = data["orderId"] !== undefined ? data["orderId"] : <any>null;
            this.order = data["order"] ? CustomerOrder.fromJS(data["order"]) : <any>null;
        }
    }

    static fromJS(data: any): CustomerOrderShipping {
        let result = new CustomerOrderShipping();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["customerOrderShippingId"] = this.customerOrderShippingId !== undefined ? this.customerOrderShippingId : <any>null;
        data["name"] = this.name !== undefined ? this.name : <any>null;
        data["address"] = this.address !== undefined ? this.address : <any>null;
        data["city"] = this.city !== undefined ? this.city : <any>null;
        data["state"] = this.state !== undefined ? this.state : <any>null;
        data["zipCode"] = this.zipCode !== undefined ? this.zipCode : <any>null;
        data["orderId"] = this.orderId !== undefined ? this.orderId : <any>null;
        data["order"] = this.order ? this.order.toJSON() : <any>null;
        return data; 
    }
}

export interface ICustomerOrderShipping {
    customerOrderShippingId: number;
    name?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zipCode?: string | null;
    orderId: number;
    order?: CustomerOrder | null;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    result: any; 

    constructor(message: string, status: number, response: string, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.result = result;
    }
}

function throwException(q: ng.IQService, message: string, status: number, response: string, result?: any): ng.IPromise<any> {
    if(result !== null && result !== undefined)
        return q.reject(result);
    else
        return q.reject(new SwaggerException(message, status, response, null));
}

function blobToText(blob: Blob, q: ng.IQService): ng.IPromise<string> {
    return new q((resolve) => { 
        let reader = new FileReader(); 
        reader.onload = function() { 
            resolve(this.result);
        }
        reader.readAsText(blob); 
    });
}

// build angular registrations for the client(s)
let clientClasses = {'DdConstructionClient': DdConstructionClient};

for (let clientClass in clientClasses) {
    if (clientClasses.hasOwnProperty(clientClass)) {
        angular.module('angularApp').service(clientClass, ['$http', '$q', clientClasses[clientClass]]);
    }
}
}