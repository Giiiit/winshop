/**
 * Created by zx on 2016/7/2.
 */
'use strict';

angular.module('service')
    .factory('SaleList', ["$http", 'URL', 'ServiceHelper', function ($http, URL, ServiceHelper) {

        return {
            addOrder: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/add_order'
                })

            },
            updateOrder: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/update_order'
                })

            },
            getContractOrderListByNormal: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_contractOrderListByNormal'
                })

            }


        }

    }]);
