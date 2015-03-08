'use strict';

angular.module('angularFullstackApp')
  .controller('NewCtrl', function ($scope, $http) {
    
    $scope.newSnippet = {};

    $scope.isSubmitted = false;
    $scope.submissionSuccess = false;
    $scope.submissionError = false;

    $scope.saveSnippet = function(){

      // get form values
      $scope.newSnippet.name = $scope.name;
      $scope.newSnippet.body = $scope.body;
      if( $scope.tags !== undefined ) $scope.tags.split(' ');
      $scope.newSnippet.dateCreated = new Date();

      $scope.isSubmitted = true;
      
      // send to server
      $http.post('/api/snippets', $scope.newSnippet)
        .success( function(response){
          if(response){
            $scope.submissionSuccess = true;
          }
        })
        .error( function(err){
          $scope.submissionError = true;
          console.log(err);
        });
    };

    $scope.resetForm = function(){
      $scope.name = '';
      $scope.body = '';
      $scope.tags = '';
      $scope.isSubmitted = false;
      $scope.submissionSuccess = false;
    }
  });
