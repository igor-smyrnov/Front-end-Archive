angular.module('directoryApp', ['ngAnimate', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
    
        $urlRouterProvider.otherwise('/');
    
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './static/home.html',
                controller: 'directoryController as dirList'
            })
            .state('about', {
                url: '/about',
                templateUrl: './static/about.html'
            });
    })
    .controller('directoryController', function(){
        var dirList = this;
        dirList.toggle = true;
        dirList.cars = [ 
            {name:"Ford", country:"USA", 
             year:"1903", logo:"img/ford-logo.png"},
            {name:"Audi", country:"German", 
             year:"1909", logo:"img/audi-logo.png"}, 
            {name:"Subaru", country:"Japan", 
             year:"1954", logo:"img/subaru-logo.png"}
        ];

        dirList.addCar = function(){
            dirList.cars.push({
                name: dirList.name, 
                country: dirList.country,
                year: dirList.year 
            })
        };
        
/*        dirList.getNavClass = function(path){
            if($location.path)
        };*/
    })
    .directive('carList', function(){
        return{
            templateUrl: 'car.html'
        }
    });