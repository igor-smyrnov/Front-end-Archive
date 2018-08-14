/**
 * Created by stelmakh on 28.10.2015.
 */

'use strict';

cvEditor.factory('sessionService', ['$http', function($http){
    return{
        set:function(key,value){
            return sessionStorage.setItem(key,value);
        },
        get:function(key){
            return sessionStorage.getItem(key);
        },
        destroy:function(key){

        }
    };
}])
