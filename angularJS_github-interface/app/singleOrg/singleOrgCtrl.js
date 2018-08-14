"use strict";

gh_gui.controller('singleOrgCtrl', function ($scope, $stateParams, getData) {

    getData.orgByName($stateParams.org).get(function (data) {
        $scope.orgData = data;
        getData.reposByOrgName($scope.orgData.login).query(function (data) {
            $scope.reposData = data;
        });
        getData.usersByOrgName($scope.orgData.login).query(function (data) {
            $scope.usersData = data;
            $scope.usersData.forEach (function (item) {
                getData.userByName(item.login).get(function (data) {
                    item.name = data.name;
                });
            });
        });
    });
});