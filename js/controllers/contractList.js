/**
 * Created by zx on 2016/6/28.
 */

'use strict';

angular.module('contractList',['ngRoute','service','ui.bootstrap'])
    .controller('contractListController', [ 'Contract','$scope','$cookies','$window', '$rootScope','Login', function (Contract, $scope,$cookies,$window,$rootScope, Login) {
        $rootScope.cookie = $cookies;
        $scope.loginOut = loginOut;
        Contract.getContractList().success(function (response) {

            $scope.contract_list = response.listData ? response.listData.datas : [];

        });

        function loginOut() {

            $rootScope.cookie.remove('sessionId');
            $rootScope.cookie.remove('isregister');

            Login.loginOut().success(function (response) {

                alert(response.message);

                $window.location.href = "../../index.html";

            });

        }


    }]);
