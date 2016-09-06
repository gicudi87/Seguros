'use strict';

angular.module('myapp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/comments/comments.html',
        controller: 'CommentsController',
        resolve:{
          resolvedComments: ['Comments', function (Comments) {
            return Comments.query();
          }]
        }
      })
        .otherwise({
            redirectTo: '/'
        });
    }]);
