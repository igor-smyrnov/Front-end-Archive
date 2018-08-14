/**
 * Created by Igor on 4/16/2016.
 */
myApp.service("myService", function ($http, $q) {

    var deferred = $q.defer();

    $http.get('data.json')
        .then(function (data) {
            deferred.resolve(data);
        });
    this.getUsers = function () {
        return deferred.promise;
    }
})
    .controller("myCtrl2", function ($scope, myService) {
        var promise = myService.getUsers();
        promise.then(function (data) {
            $scope.users = data;
            console.log($scope.users);
        })
    });