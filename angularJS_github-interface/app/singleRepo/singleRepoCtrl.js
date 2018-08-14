"use strict";

gh_gui.controller('singleRepoCtrl', function ($scope, $stateParams, getData) {

    getData.repoByFullName($stateParams.owner, $stateParams.repo).get(function (data) {
        $scope.repoData = data;
    });
    getData.commitsByFullName($stateParams.owner, $stateParams.repo).query(function (data) {
        $scope.commitsData = data;

        $scope.commitsData.forEach(function (item) {
            if (item.committer.login != item.author.login){
                $scope.authorEqualCommitter = 1;
            }
        })
    });
});