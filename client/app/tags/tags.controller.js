'use strict';

angular.module('angularFullstackApp')
  .controller('TagsCtrl', ['$http', '$scope', function ($http, $scope) {
    $scope.tags = {};

    $http.get('/api/tags')
      .success( function(response){
        $scope.tags = response;
      });
  }]);
