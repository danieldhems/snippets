'use strict';

angular.module('angularFullstackApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'btford.markdown'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/',
        controller: 'MainCtrl'
      });

    $locationProvider.html5Mode(true);
  });