'use strict';

angular.module('angularFullstackApp')
  .controller('NewCtrl', function ($scope, $http) {

  	$scope.newSnippet = {};

    $scope.saveSnippet = function(e){

      // get form values
      $scope.newSnippet.name = $scope.name;
      $scope.newSnippet.body = $scope.body;
      $scope.newSnippet.tags = $scope.tags.split(' ');
      $scope.newSnippet.date_created = new Date();

      // send to server
      $http.post('/api/snippets', $scope.newSnippet)
        .success( function(response){
          if(response){
          	alert("Done")
          }
        });
    }
  });
