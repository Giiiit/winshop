/**
 * Created by zx on 2016/7/4.
 */
'use strict';

angular.module('service')
    .factory('Login', ["$http", 'URL', 'ServiceHelper', function ($http, URL, ServiceHelper) {

        return {
            login: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/login'
                })

            },
            loginOut: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/loginOut'
                })

            }
        }

    }]);
