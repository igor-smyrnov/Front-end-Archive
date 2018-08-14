"use strict";

gh_gui.controller('reposListCtrl', function ($scope, getData) {

    getData.repos().query(function (data) {
        $scope.reposData = data;
    });
});