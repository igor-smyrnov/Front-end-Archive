"use strict";

var db_test = angular.module('DB_Test', ["ui.router"]);

db_test.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
                url: '/main',
                templateUrl: 'app/main.html'
            }
        );
    $urlRouterProvider.otherwise('/main');
});

db_test.factory('dataFactory', function ($http) {
    var promise;

    return {
        getPosts: function () {
            promise = $http.get('http://localhost:3000/getPosts')
                .then(response => response.data);
            return promise;
        },
        addPost: function (data) {
            promise = $http.post('http://localhost:3000/addPost', data);
            return promise;
        },
        removePost: function (post_id) {
            promise = $http.delete('http://localhost:3000/removePost/' + post_id);
            return promise;
        },
        updatePost: function (data) {
            promise = $http.put('http://localhost:3000/updatePost', data);
            return promise;
        }
    }
});

db_test.controller('mainCtrl', function ($scope, dataFactory) {
    $scope.newPost = null;
    $scope.changePost = null;

    $scope.readPosts = function () {
        dataFactory.getPosts().then(function (data) {
            return $scope.data = data;
        })
    };

    $scope.removePost = function (index) {
        dataFactory.removePost($scope.data[index].post_id);
        $scope.data.splice(index, 1);
    };

    $scope.addPost = function (newPost) {
        dataFactory.addPost(newPost);

        $scope.readPosts();
    };

    $scope.createUpdateForm = function (index) {
        $scope.newPost = null;
        $scope.changePost = {
            title: $scope.data[index].title,
            content: $scope.data[index].content,
            author: $scope.data[index].author,
            index: index
        };
    };

    $scope.updatePost = function (changePost) {
        $scope.data[changePost.index].title = changePost.title;
        $scope.data[changePost.index].content = changePost.content;
        $scope.data[changePost.index].author = changePost.author;

        dataFactory.updatePost($scope.data[changePost.index]);
        // console.log($scope.data[changePost.index]);
    };

    $scope.createAddForm = function () {
        $scope.changePost = null;
        $scope.newPost = {};
    };

    $scope.clearForm = function (newPost) {
        newPost.title = null;
        newPost.content = null;
        newPost.author = null;
    };
});