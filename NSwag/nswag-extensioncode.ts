// TODO remove this hack once NSwag has templates we can change
blobToText(null, <ng.IQService>function(all: any){});

// build angular registrations for the client(s)
let clientClasses = {clientClasses};

for (let clientClass in clientClasses) {
    if (clientClasses.hasOwnProperty(clientClass)) {
        angular.module('components').service(clientClass, ['$http', '$q', getApiUrlConstantFromClassName(clientClass), clientClasses[clientClass]]);
    }
}

function getApiUrlConstantFromClassName(className: string): string {
    let firstChar = className.substring(0, 1).toLowerCase();

    return firstChar + className.substring(1).replace('Client', '') + 'ApiUrl';
}