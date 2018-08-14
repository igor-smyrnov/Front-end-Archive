/**
 * Created by Igor on 7/18/2017.
 */

var contacts = angular.module("contacts",[]);

contacts.controller("contactsCtrl", function($scope, $http){

    $scope.contactList = {};

    $http.get('contacts.json')
        .then(function(response){
            $scope.contactList = response.data;
        });
});