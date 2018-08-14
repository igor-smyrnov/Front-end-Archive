'use strict';

ciInterface.controller('buildsListCtrl',
    function ($scope, $location, $stateParams, getDataFactory) {

        $scope.paginSize = 5;
        
        //TODO: Make test cases for using factory
        
        //Getting data from Travis repository
        getDataFactory.travisRepoData().then(function(data) {
            $scope.travisRepo = data;
            //Putting repository id and getting builds list
            getDataFactory.travisBuildListData($scope.travisRepo.id).then(function(data) {
                $scope.travisBuilds = data;
            });
        });
        
        //TODO: Make test cases for $watch
        
        // Fix for pagination redirecting
        $scope.$watch($stateParams.number, function () {
            // if our location path is /builds/, it will redirect to /builds/1
            if($stateParams.number === '') {
                $stateParams.number = 1;
                $location.path('/builds/' + 1);
            }
            $scope.currentPage = $stateParams.number;
        });
        
        //Fix, changing location path, if pressed paginator button
        $scope.setPage = function (newNumber) {
            $location.path('/builds/' + newNumber);
        };
    });