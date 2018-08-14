"use strict";

var angular_cms = angular.module('Angular_CMS', ["ui.router", "ui.router.metatags"]);

angular_cms.config(['$stateProvider', '$urlRouterProvider', 'UIRouterMetatagsProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('lorem', {
            url: '/lorem',
            views: {
                'widgetArea1': {
                    templateUrl: 'app/widgets/leftMenu.html'
                },
                'widgetArea2': {
                    templateUrl: 'app/widgets/breadcrumbs.html'
                },
                'content': {
                    templateUrl: 'app/content/lorem.html'
                }
            },
            metaTags: {
                title: "Lorem",
                description: "This is the frontpage",
                keywords: "lots of interresting keywords"
            }
        })
        .state('home', {
            url: '/home',
            views: {
                'widgetArea1': {
                    templateUrl: 'app/widgets/categories.html'
                },
                'content': {
                    templateUrl: 'app/content/home.html',
                    controller: 'homeCtrl'
                },
                'widgetArea3': {
                    templateUrl: 'app/widgets/articles.html'
                }
            },
            metaTags: {
                title: "Home",
                description: "This is the frontpage",
                keywords: "lots of interresting keywords"
            }
        })
        .state('404', {
            url: '/404',
            views: {
                'content': {
                    templateUrl: 'app/content/404.html'
                }
            },
            metaTags: {
                title: "404 Not found"
            }
        });

        $urlRouterProvider.otherwise('/404');

}]);

function runBlock($rootScope, MetaTags) {
    $rootScope.MetaTags = MetaTags;
}
angular_cms.run(['$rootScope', 'MetaTags', runBlock]);