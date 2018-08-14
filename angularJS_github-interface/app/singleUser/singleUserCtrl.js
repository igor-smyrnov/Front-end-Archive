"use strict";

gh_gui.controller('singleUserCtrl', function ($scope, $stateParams, getData) {

    getData.userByName($stateParams.user).get(function (data) {
        $scope.userData = data;
        getData.reposByUserName($scope.userData.login).query(function (data) {
            $scope.reposData = data;
        });
        getData.orgsByUserName($scope.userData.login).query(function (data) {
            $scope.orgsData = data;
        });
    });
});