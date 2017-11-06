/**
 * Created by zx on 2016/7/2.
 */
'use strict';

angular.module('service')
    .factory('Contract', ["$http", 'URL', 'ServiceHelper', function ($http, URL, ServiceHelper) {

        return {
            addContract: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/add_contract'
                })

            },
            updateContract: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/update_contract'
                })

            },
            getContractList: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_contractList'
                })

            },
            getContractDetail: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_contractDetail'
                })

            },
            getContractlistByCustomer: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_contractListByCustomer'
                })

            },
            addContractIncome: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/add_contractIncome'
                })

            },
            getContractIncomeDetail: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_contractIncomeDetail'
                })

            },
            addContractMeasure: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/add_contractMeasure'
                })

            },
            getContractMeasureList: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_contractMeasureList'
                })

            },
            searchContractList: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/search_contractList'
                })

            },
            getContractListByCustomer: function (data) {

                return $http({
                    method: 'POST',
                    data: ServiceHelper.wrapAuthorazation(data),
                    url: URL + '/get_contractListByCustomer'
                })

            }

            

        }

    }]);
