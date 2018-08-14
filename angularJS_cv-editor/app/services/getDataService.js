/**
 * Created by stelm on 15.12.2015.
 */

'use strict';

cvEditor.factory('getDataService',['$http', function ($http) {
    var sectionsData = [];
    var personalData;
    var fields = [];
    var self=this;
    $http.post("app/model/controller.php",
        {getdata:true}
    ).success(function(data, status, headers, config){
        self.personalData = data.personaldata;
        data.sections.forEach(function(cat){
            sectionsData.push(cat);
        });
    });
    
    return{
        personal:self,
        sections:sectionsData,
        getfields: function(){
            $http.post("app/model/controller.php",
                {getdata:true,act:"fields"}
            ).then(function(data){
                console.log(data.data);
                fields.push(data.data);
            });
            return fields;
        }
    }

}]);