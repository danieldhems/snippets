'use strict';

describe('Controller: SnippetCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFullstackApp'));

  var SnippetCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SnippetCtrl = $controller('SnippetCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
