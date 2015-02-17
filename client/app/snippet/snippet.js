'use strict';

angular.module('angularFullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/snippet/:id', {
        templateUrl: 'app/snippet/snippet.html',
        controller: 'SnippetCtrl'
      });
  });
