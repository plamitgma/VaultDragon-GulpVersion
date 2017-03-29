angular.module('main', ['ngRoute',
        'main.home'
    ])
    .run(function() {})
    .config(mainConfig);

mainConfig.$inject = ['$routeProvider'];

function mainConfig($routeProvider) {
    $routeProvider
        .when('/', {
            title: 'Home',
            controller: 'homeCtrl',
            templateUrl: 'src/views/home/home.html',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
}