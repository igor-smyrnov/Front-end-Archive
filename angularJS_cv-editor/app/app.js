var cvEditor = angular.module('cvEditor', ['ui.router']);

cvEditor.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './app/home/homeView.html',
            controller: 'homeController'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: './app/home/homeView.html',
            controller: 'adminController'
        });
});