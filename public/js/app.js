// Declare app level module which depends on filters, and services
angular.module('myapp', ['ngMessages','ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date', 'datatables', 'angularUtils.directives.dirPagination', 'ngAnimate', 'ui.router'])
    .config(['$routeProvider' , function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/comments/comments.html',
                controller: 'CommentsController',
                cache: false
            })
            .otherwise({
                redirectTo: '/'
            });


    }]);
