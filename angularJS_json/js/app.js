myApp = angular.module("myApp",[]);
myApp.controller("myCtrl", function($scope, $http){

    $http.get('data.json')
        .success(function(response){
            $scope.users = response;
        });

    $scope.currentUser = {};
    
   /* $scope.addRow = function(){
        $scope.nameSurname.push({
            'Name': $scope.Name, 
            'Surname': $scope.Surname
        });
        
        var dataObj = {
            Name: $scope.name,
            Surname: $scope.Surname
        };
        
        var res = $http.post('data.json', dataObj);
        
        res.success(function(data, status, headers, config){
            $scope.message = data; 
        });
        
        res.error(function(data, status, headers, config){
           alert( "failure message: " + JSON.stringify({data: data})); 
        });
        
        $scope.Name = '';
        $scope.Surname = '';
    };*/

    $scope.addUser = function (currentUser) {
        $scope.users.push(angular.copy(currentUser));
        console.log(angular.copy(currentUser));
    };

    $scope.saveUser = function () {
        $scope.currentUser = {};
    };
    
    $scope.addSampleUser = function () {
        $http.post('data.json', {"Name":"Hello", "Surname":"Test"});
        $scope.users.push({"Name":"Hello", "Surname":"Test"});
    };
    $scope.editUser = function (user) {
        $scope.currentUser = user;
        console.log(user)
    };
    
    $scope.removeUser = function(user){
        var index = $scope.users.indexOf(user);
        $scope.users.splice(index, 1);
    };
});