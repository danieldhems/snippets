'use strict';

angular.module('angularFullstackApp')
  .controller('SnippetCtrl', ['$routeParams', '$http', '$scope', function ($routeParams, $http, $scope) {

  	$scope.snippet = {};
  	$scope.isEditing = false;

  	$scope.updateSnippet = function(){

  		$http.put('/api/snippets/'+$scope.snippet._id, $scope.snippet)
  		.success( function(response){
  			$scope.isEditing = false;
  		})
  		.error( function(response){

  		});
  	};

    $http.get('/api/snippets/' + $routeParams.id, $scope.newSnippet)
      .success( function(response){
        $scope.snippet = response;
      });
  }]);
