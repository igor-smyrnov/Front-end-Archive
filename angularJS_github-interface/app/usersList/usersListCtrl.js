"use strict";

gh_gui.controller('usersListCtrl', function ($scope, getData) {

    getData.users().query(function (data) {
        $scope.usersData = data;
        $scope.usersData.forEach(function (item) {
            getData.userByName(item.login).get(function (data) {
                item.name = data.name;
                item.location = data.location;
                item.public_repos = data.public_repos;
            })
        });
    });
});