"use strict";

gh_gui.factory('getData', function ($resource) {
   var data;

    return {
        repoByFullName: function (repoOwner, repoName, isMock) {
            if (!isMock)
                return $resource('https://api.github.com/repos/'+repoOwner+'/'+repoName);
            else
                return $resource('mocks/singleRepo_'+repoOwner+'_'+repoName+'.json');
        },
        userByName: function (userName) {
            return $resource('https://api.github.com/users/'+userName)
        },
        orgByName: function (orgName) {
            return $resource('https://api.github.com/orgs/'+orgName)
        },
        repos: function () {
            return $resource('https://api.github.com/repositories')
        },
        reposByOrgName: function (orgName) {
            return $resource('https://api.github.com/orgs/'+orgName+'/repos')
        },
        reposByUserName: function (userName) {
            return $resource('https://api.github.com/users/'+userName+'/repos')
        },
        commitsByFullName: function (repoOwner, repoName) {
            return $resource('https://api.github.com/repos/'+repoOwner+'/'+repoName+'/commits')
        },
        users: function () {
            return $resource('https://api.github.com/users?per_page=10')
        },
        usersByOrgName: function (orgName) {
            return $resource('https://api.github.com/orgs/'+orgName+'/members')
        },
        orgs: function () {
            return $resource('https://api.github.com/organizations?per_page=10')
        },
        orgsByUserName: function (userName) {
            return $resource('https://api.github.com/users/'+userName+'/orgs')
        }
    }
});