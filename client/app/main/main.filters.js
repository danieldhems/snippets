'use strict';

/**
 * @ngdoc filter
 * @name angularFullstackApp.filter:date
 * @function
 * @description
 * # date
 * Filter in the angularFullstackApp.
 */
angular.module('angularFullstackApp')
  .filter('date', function () {
    return function (input) {
      return moment(input).format('MMM Do, YYYY [at] hh:mm');
    };
  });
