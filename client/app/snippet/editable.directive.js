var app = angular.module('angularFullstackApp');

app.directive('editable', function($scope){
	return {
		restrict: 'A',
		template: '',
		link: function($scope, $elem, $attrs){
			var editBtn = '<a href="#" ng-click="editing=true">edit</a>';
			$elem.after(editBtn);

		}
	}
});