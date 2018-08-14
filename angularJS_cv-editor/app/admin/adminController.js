cvEditor.controller('adminController',
    function($http, $scope, $controller, authService, getDataService, setDataService){
        
        $controller('homeController', {$scope: $scope});
        
        $scope.newCat = {};
        $scope.newRecord = {};
        $scope.myData = [];
        $scope.addCategory = function(){
            $scope.myData.push($scope.newCat);
            setDataService.insert($scope.newCat,'addCat');
            $scope.newCat = {};
            //console.log($scope.myData);
        };

        $scope.addRecord = function(id){
            $scope.newRecord[id].idCat = id;
            $scope.myData.push($scope.newRecord[id]);
            
            setDataService.insert($scope.newRecord[id],'addRecord');
            $scope.newRecord = {};
        };

        $scope.saveUser = function() {
            //console.log($scope.personal.personalData);
            //$http.put('app/model/cv-data.json')
        };
        $scope.eyeSwitch = authService.isauth();
        $scope.toggle = authService.isauth();
    });