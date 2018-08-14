"use strict";

angular_cms.controller('homeCtrl', function ($scope, getDataFactory) {
    getDataFactory.testData().then(function(data) {
        $scope.test = data;
        console.log(data);
    });
    $scope.secondTest = "text";
});