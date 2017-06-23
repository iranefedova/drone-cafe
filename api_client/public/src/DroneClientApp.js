var droneApp = angular.module('DroneApp', ['ngRoute']);

angular
    .module('DroneApp', [
        'ngRoute',
        // 3rd party dependencies
        'btford.socket-io'
    ])

    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'src/ClientLogin/ClientLogin.html',
        controller: 'ClientLoginCtrl'
    }).
    when('/account/:email', {
        templateUrl: 'src/ClientAccount/ClientAccount.html',
        controller: 'ClientAccountCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);
