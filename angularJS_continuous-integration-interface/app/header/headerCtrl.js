'use strict';

ciInterface.controller('headerCtrl',
    function ($scope, getDataFactory) {
        
        //Getting data from Travis repository
        getDataFactory.travisRepoData().then(function(data) {
            $scope.travisRepo = data;
            //Putting repository slug and getting github repo data
            getDataFactory.githubRepoData($scope.travisRepo.slug).then(function(data) {
                $scope.githubProfile = data;
            });
        });
    });
