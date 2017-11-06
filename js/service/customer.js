/**
 * Created by zx on 2016/7/2.
 */
'use strict';

angular.module('service')
    .factory('Customer', ["$http", 'URL', 'ServiceHelper', function ($http, URL, ServiceHelper) {

        return {
            addCustomer: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/add_customer'
                });

            },
            getCustomerTypeList: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_customerTypeList'
                });

            },
            getCustomerList: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_customerList'
                });

            },
            getCustomerDetail: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_customerDetail'
                });

            },
            getCustomerListWithRecentContract: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_customerListWithRecentContract'
                });

            },
            searchCustomerListWithRecentContract: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/search_customerListWithRecentContract'
                });

            },
            addCustomerFollowStatus: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/add_customerFollowStatus'
                });

            },
            getCustomerFollowStatusList: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_customerFollowStatusList'
                });

            }

        }

    }]);
