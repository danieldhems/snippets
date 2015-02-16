'use strict';

angular.module('angularFullstackApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.snippets = [];

    $scope.newSnippet = {};

    $scope.newSnippetForm = $('.add-form');

    $scope.searchPhrase;

    $http.get('/api/snippets', $scope.newSnippet)
      .success( function(response){
        $scope.updateResults(response);
      });


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

            var snippetId = response.id;

            $scope.prependSnippet(response);
            
            $scope.name = "";
            $scope.body = "";

            $scope.toggleForm();
          }
        });
    }

    $scope.prependSnippet = function(snippet){
      $scope.snippets.unshift(snippet);
    }

    $scope.updateResults = function(snippets){
      $scope.snippets = snippets;
    }

    $scope.deleteThing = function(snippet) {
      $http.delete('/api/snippet/' + snippet._id);
    };

    $scope.toggleForm = function(){
      if( $scope.newSnippetForm.hasClass('show') ){
        $scope.newSnippetForm.removeClass('show');
      } else {
        $scope.newSnippetForm.addClass('show');
      }
    }
  });
