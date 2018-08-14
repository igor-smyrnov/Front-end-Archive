"use strict";

gh_gui.controller('usersInOrgCtrl', function ($scope, $stateParams, getData) {

    getData.usersByOrgName($stateParams.org).query(function (data) {
        $scope.usersData = data;
        if(!$scope.usersData.length)
            $scope.noUsers = "This organizations don't have users yet!";
    });
});