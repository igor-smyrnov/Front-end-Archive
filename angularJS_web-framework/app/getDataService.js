"use strict";

angular_cms.factory('getDataFactory', function ($http) {
    
    var promise;
    
    return {
        testData: function () {
            promise = $http.get('http://localhost:3002/')
                .then(response => response.data);
            return promise;
        }
    }
});
