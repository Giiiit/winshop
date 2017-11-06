/**
 * Created by zx on 2016/7/4.
 */
'use strict';

angular.module('service', ['ngCookies'])
    .config(function ($httpProvider) {

        $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

        // Override $http service's default transformRequest
        $httpProvider.defaults.transformRequest = [function (data) {
            /**
             * The workhorse; converts an object to x-www-form-urlencoded serialization.
             * @param {Object} obj
             * @return {String}
             */
            var param = function (obj) {
                var query = '';
                var name, value, fullSubName, subName, subValue, innerObj, i;

                for (name in obj) {
                    value = obj[name];

                    if (value instanceof Array) {
                        for (i = 0; i < value.length; ++i) {
                            subValue = value[i];
                            fullSubName = name + '[' + i + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if (value instanceof Object) {
                        for (subName in value) {
                            subValue = value[subName];
                            fullSubName = name + '[' + subName + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if (value !== undefined && value !== null) {
                        query += encodeURIComponent(name) + '='
                            + encodeURIComponent(value) + '&';
                    }
                }

                return query.length ? query.substr(0, query.length - 1) : query;
            };

            return angular.isObject(data) && String(data) !== '[object File]'
                ? param(data)
                : data;
        }];
    })
    .constant('AUTHORIZATION',{
        version: '1.0'
    })
    .constant('URL', 'http://192.168.1.25:9080/winshop')        //本地
    //.constant('URL', 'http://114.215.194.43:9091/klink')          //线上
    // .constant('PAGE_SIZE', 5)                                          //本地
    .constant('PAGE_SIZE', 20)                                        //线上
    .constant('IS_TEST', true)                                      // 本地
    //.constant('IS_TEST', false)                                      // 线上
    //.constant('SALE_MODULE_MENU_ID', 3)                                      // 本地
    .constant('SALE_MODULE_MENU_ID', 3)                                      // 线上
    .constant('DATE_FORMAT', 'YYYY-MM-DD')
    .constant('DATE_FORMAT_MINUTE', 'YYYY-MM-DD HH:mm:ss')

    .factory('ServiceHelper', ['AUTHORIZATION','$cookies', function (AUTHORIZATION,$cookies) {

        return {
            setVersion: function (version) {

                AUTHORIZATION.version = version;

            },
            setSessionId: function (sessionId) {

                AUTHORIZATION.sessionId = sessionId;

            },
            getSessionId: function () {

                return AUTHORIZATION.sessionId;

            },
            getVersion: function () {
                return AUTHORIZATION.version;
            },
            setMenuId: function (menu_id) {

                AUTHORIZATION.menu_id = menu_id;

            },
            getMenuId: function () {

                return AUTHORIZATION.menu_id;

            },
            wrapAuthorazation: function (data) {

                if (!data) {

                    data = {};

                }

                data.version = AUTHORIZATION.version;

                data.sessionId = $cookies.get("sessionId");

                data.menuId = AUTHORIZATION.menu_id;

                return data;

            }
        }

    }]);
