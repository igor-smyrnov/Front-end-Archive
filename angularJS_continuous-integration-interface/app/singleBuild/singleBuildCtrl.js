'use strict';

ciInterface.controller('singleBuildCtrl',
    function ($scope, $stateParams, getDataFactory) {

        //Taking data from Travis build by id from state
        getDataFactory.travisSingleBuildData($stateParams.id).then(function(data) {
            $scope.travisBuild = data;
        });

    });