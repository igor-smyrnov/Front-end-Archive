'use strict';

describe('Controller: buildsListCtrl', function() {

    beforeEach(module('ciInterface'));

    var scope;
    var location;
    var buildsListCtrl;

    beforeEach(inject(function ($rootScope, $location, $controller) {
        scope = $rootScope.$new();
        location = $location;
        buildsListCtrl = $controller('buildsListCtrl', {
            $scope: scope
        });
    }));

    it('should change location path', function() {
        scope.setPage(3);
        expect(location.path()).toEqual("/builds/3");
    });
});