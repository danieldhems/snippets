'use strict';

angular.module('angularFullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tag', {
        templateUrl: 'app/tag/tag.html',
        controller: 'TagCtrl'
      });
  });
