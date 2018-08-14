'use strict';

//TODO: Make test cases for factory

ciInterface.constant('reposInfo', {
    repoDir: 'AnalyticsFire/spike',
    mashapeKey: {'X-Mashape-Key': '0KvdaQI7C4fcvOqW7LZlQA6bhvi8CoQK'}
});

ciInterface.factory('getDataFactory', function ($http, reposInfo) {

    var promise;

    return {
        travisRepoData: function() {
            promise = $http.get('https://danopia-travis-ci.p.mashape.com/repos/' + reposInfo.repoDir,
                {headers: reposInfo.mashapeKey})
                .then( response =>  response.data );
            return promise;
        },
        githubRepoData: function(repoSlug) {
            promise = $http.get('https://api.github.com/repos/' + repoSlug)
                .then( response => response.data );
            return promise;
        },
        travisBuildListData: function(repoId) {
            promise = $http.get('https://danopia-travis-ci.p.mashape.com/builds?repository_id=' + repoId,
                {headers: reposInfo.mashapeKey})
                .then( response => response.data );
            return promise;
        },
        travisSingleBuildData: function(buildId) {
            promise = $http.get('https://danopia-travis-ci.p.mashape.com/builds/' + buildId,
                {headers: reposInfo.mashapeKey})
                .then( response => response.data );
            return promise;
        },
        travisSampleBuildData: function() {
            promise = $http.get('https://danopia-travis-ci.p.mashape.com/builds/142664584',
                {headers: reposInfo.mashapeKey})
                .then( response => response.data );
            return promise;
        }
    };

});