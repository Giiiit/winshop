/**
 * Created by zx on 2016/7/5.
 */
'use strict';

angular.module('customerList',['ngRoute','service','ui.bootstrap'])
    .controller('customerListController', [ 'Customer','$scope','$cookies','$window', '$rootScope','Login', function (Customer, $scope,$cookies,$window,$rootScope, Login) {
        $rootScope.cookie = $cookies;
        $scope.loginOut = loginOut;
        Customer.getCustomerList().success(function (response) {

            $scope.customer_list = response.listData ? response.listData.datas : [];

        });

        function loginOut() {

            $rootScope.cookie.remove('sessionId');
            $rootScope.cookie.remove('isregister');

            Login.loginOut().success(function (response) {

                alert(response.message);

                $window.location.href = "../../index.html";

            });

        };


    }]);