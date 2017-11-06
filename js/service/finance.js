/**
 * Created by zx on 2016/7/2.
 */
'use strict';

angular.module('service')
    .factory('Finance', ["$http", 'URL', 'ServiceHelper', function ($http, URL, ServiceHelper) {

        return {
            getAccountList: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_accountList'
                })

            },
            getFinanceListByContractAndAccount: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_financeListByContractAndAccount'
                })

            },
            getFinanceListByIntervalTime: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_financeListByIntervalTime'
                })

            },
            addBank: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/add_bank'
                })

            }


        }

    }]);
