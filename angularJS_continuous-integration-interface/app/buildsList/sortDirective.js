'use strict';

//TODO: Make test cases for directive

ciInterface.directive('sort', function () {
    return {
        restrict: 'A',
        link: function ($scope, elem, attrs) {
            elem.bind('click', function () {
                $scope.$apply(function () {
                    $scope.sortKey = attrs.sort;
                    $scope.reverse = !$scope.reverse;
                });
            });

        }
    }
});
