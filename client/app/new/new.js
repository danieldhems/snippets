'use strict';

angular.module('angularFullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/new', {
        templateUrl: 'app/new/new.html',
        controller: 'NewCtrl'
      });
  });
