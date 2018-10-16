// build angular registrations for the client(s)
let clientClasses = {clientClasses};

for (let clientClass in clientClasses) {
    if (clientClasses.hasOwnProperty(clientClass)) {
        angular.module('angularApp').service(clientClass, ['$http', '$q', clientClasses[clientClass]]);
    }
}