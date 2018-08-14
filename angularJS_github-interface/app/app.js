"use strict";

var gh_gui = angular.module('GitHub_interface', ['ngResource', 'ui.router']);

gh_gui.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('repo', {
            url: '/repo/:owner/:repo',
            templateUrl: 'app/singleRepo/singleRepoView.html',
            controller: 'singleRepoCtrl'
        })
        .state('user', {
            url: '/user/:user',
            templateUrl: 'app/singleUser/singleUserView.html',
            controller: 'singleUserCtrl'
        })
        .state('org', {
            url: '/org/:org',
            templateUrl: 'app/singleOrg/singleOrgView.html',
            controller: 'singleOrgCtrl'
        })
        .state('repos', {
            url: '/repos',
            templateUrl: 'app/reposList/reposListView.html',
            controller: 'reposListCtrl'
        })
        .state('users', {
            url: '/users',
            templateUrl: 'app/usersList/usersListView.html',
            controller: 'usersListCtrl'
        })
        .state('orgs', {
            url: '/orgs',
            templateUrl: 'app/orgsList/orgsListView.html',
            controller: 'orgsListCtrl'
        })
        .state('reposInOrgs', {
            url: '/orgs/:org/repos',
            templateUrl: 'app/reposList/reposListView.html',
            controller: 'reposInOrgCtrl'
        })
        .state('reposInUsers', {
            url: '/users/:user/repos',
            templateUrl: 'app/reposList/reposListView.html',
            controller: 'reposInUserCtrl'
        })
        .state('usersInOrg', {
            url: '/orgs/:org/members',
            templateUrl: 'app/usersList/usersListView.html',
            controller: 'usersInOrgCtrl'
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/notFound/notFoundView.html'
        });
    $urlRouterProvider.otherwise(function ($injector, $location) {
        var state = $injector.get('$state');

        if($location.path() === '')
            $location.path('/users');
        else {
            state.go('404');
            return $location.path();
        }
    });
});