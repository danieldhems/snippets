'use strict';

angular.module('angularFullstackApp')
  .controller('MainCtrl', ['$http', '$scope', 'Modal', function ($http, $scope, Modal) {
    $scope.snippets = [];

    $scope.newSnippet = {};

    $scope.newSnippetForm = $('.new-snippet');

    $scope.searchPhrase;

    $http.get('/api/snippets', $scope.newSnippet)
      .success( function(response){
        $scope.updateResults(response);
      });


    

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
  }]);
