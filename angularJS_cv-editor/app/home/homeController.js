cvEditor.controller('homeController',
    function($http, $scope, authService, getDataService){
            
        $scope.sections = getDataService.sections;
        $scope.personal = getDataService.personal;
        $scope.arrfields = getDataService.getfields();
        
    });

    //sasha code authorization admin
    cvEditor.controller('admauthCtrl', ['$scope','authService', function ($scope,authService){
        $scope.admin = {name:"",pass:"",error:""};
        authService.isauth();
        $scope.auth=function(data){
            authService.auth($scope.admin);
        };
    }]);