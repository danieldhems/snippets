'use strict';

angular.module('angularFullstackApp')
  .controller('SnippetCtrl', ['$routeParams', '$http', '$scope', function ($routeParams, $http, $scope) {

  	$scope.snippet = {};

    $http.get('/api/snippets/' + $routeParams.id, $scope.newSnippet)
      .success( function(response){
        $scope.snippet = response;
      });
  }]);
