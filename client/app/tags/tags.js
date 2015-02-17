'use strict';

angular.module('angularFullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tags', {
        templateUrl: 'app/tags/tags.html',
        controller: 'TagsCtrl'
      });
  });
