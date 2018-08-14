"use strict";

gh_gui.controller('reposInOrgCtrl', function ($scope, $stateParams, getData) {
    
    getData.reposByOrgName($stateParams.org).query(function (data) {
        $scope.reposData = data;
    });
});