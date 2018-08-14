var myApp = angular.module("myApp",[]);
myApp.controller("myCtrl", function($scope, $http){
    $scope.insertData = function(){
        $http.post(
            "insert.php", {
                'post-title':$scope.post-title,
                'post-content':$scope.post-content,
                'post-author':$scope.post-author
            }
        ).success(function(data, status, header, config){
            console.log("data inserted successfully");
        });
    }
});