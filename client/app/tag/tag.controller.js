'use strict';

angular.module('angularFullstackApp')
  .controller('TagCtrl', ['$routeParams', '$http', '$scope', function ($routeParams, $http, $scope) {

  	$scope.tagName = $routeParams.tagName;
  	$scope.snippets = {};

  	$http.get('/api/tags/'+$scope.tagName, $scope.newSnippet)
  	  .success( function(response){
  	    $scope.snippets = response;
  	  });
  }]);
