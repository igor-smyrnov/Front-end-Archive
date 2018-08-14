"use strict";

gh_gui.controller('reposInUserCtrl', function ($scope, $stateParams, getData) {
    
    $scope.userName = $stateParams.user;
    
    getData.reposByUserName($scope.userName).query(function (data) {
        $scope.reposData = data;
    });
});