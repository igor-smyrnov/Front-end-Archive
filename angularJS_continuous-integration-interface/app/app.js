'use strict';

var ciInterface = angular.module('ciInterface',
    ['angularUtils.directives.dirPagination', 'ui.router']);

ciInterface.config( function ($stateProvider, $urlRouterProvider) {
    /*
        TODO: discover differences between "views:" and "viewname@statename"
        https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views
    */
    $stateProvider
        .state('builds', {
            url: '/builds/:number',
            views: {
                '': { templateUrl: 'app/mainView.html'},
                'nav@builds': {
                    templateUrl: 'app/header/headerView.html',
                    controller: 'headerCtrl'
                },
                'body@builds': {
                    templateUrl: 'app/buildsList/buildsListView.html',
                    controller: 'buildsListCtrl'
                }
            }
        })
        .state('sampleBuild', {
            url: '/sampleBuild',
            views: {
                '': { templateUrl: 'app/mainView.html'},
                'nav@sampleBuild': {
                    templateUrl: 'app/header/headerView.html',
                    controller: 'headerCtrl'
                },
                'body@sampleBuild': {
                    templateUrl: 'app/singleBuild/singleBuildView.html',
                    controller: 'sampleBuildCtrl'
                }
            }
        })
        .state('build', {
            url: '/build/:id',
            views: {
                '': { templateUrl: 'app/mainView.html'},
                'nav@build': {
                    templateUrl: 'app/header/headerView.html',
                    controller: 'headerCtrl'
                },
                'body@build': {
                    templateUrl: 'app/singleBuild/singleBuildView.html',
                    controller: 'singleBuildCtrl'
                }
            }
        })
        .state('404', {
            views: {
                '': { templateUrl: 'app/mainView.html'},
                'nav@404': {
                    templateUrl: 'app/header/headerView.html',
                    controller: 'headerCtrl'
                },
                'body@404': {
                    templateUrl: 'app/notFound/notFoundView.html'
                }
            }
        });

        $urlRouterProvider.otherwise(function($injector, $location){
            var state = $injector.get('$state');

            // Fix, if our location path is /builds, it will redirect to /builds/1
            if($location.path() === "/builds")
                $location.path('/builds/1');
            else {
                state.go('404');
                return $location.path();
            }
        });
});
