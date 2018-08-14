'use strict';

ciInterface.controller('sampleBuildCtrl',
    function ($scope, getDataFactory) {

        //Taking data from Travis sample build
        getDataFactory.travisSampleBuildData().then(function(data) {
            $scope.travisBuild = data;
        });
        
    });