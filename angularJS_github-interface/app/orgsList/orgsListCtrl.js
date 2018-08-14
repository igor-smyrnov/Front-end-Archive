"use strict";

gh_gui.controller('orgsListCtrl', function ($scope, getData) {

    getData.orgs().query(function (data) {
        $scope.orgsData = data;
    });
});