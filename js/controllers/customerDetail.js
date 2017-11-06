/**
 * Created by zx on 2016/7/5.
 */

'use strict';

angular.module('customerDetail',['ngRoute','service','ui.bootstrap'])
    .controller('customerDetailController', ['Customer', '$scope','Contract','$window','$uibModal','$cookies', '$rootScope','Login',
        function (Customer, $scope, Contract,$window,$uibModal,$cookies,$rootScope, Login) {
        $rootScope.cookie = $cookies;
        $scope.loginOut = loginOut;
        var url= $window.location.search;
        var customerId = url.split("=")[1];

        Customer.getCustomerDetail({
                customerId : customerId
        }).success(function (response) {
            $scope.customer = response.data ? response.data:null;
        });
        Contract.getContractListByCustomer({
            customerId : customerId
        }).success(function (response) {
            var customerInfoAry = response.listData ? response.listData.datas : [];
            var picUrlAry,picUrl_str;
            for(var i =0;i<customerInfoAry.length;i++){
                picUrlAry = new Array();
                picUrl_str = customerInfoAry[i].picUrl;
                if(picUrl_str != null){
                    if(picUrl_str.indexOf(",")>-1){
                        picUrlAry = picUrl_str.split(",");
                    }else{
                        picUrlAry.push(customerInfoAry[i].picUrl);
                    }
                }
                customerInfoAry[i].picUrlAry = picUrlAry;
            }
            $scope.cusInfo_List = customerInfoAry;
        });
        Customer.getCustomerFollowStatusList({
            customerId : customerId
        }).success(function(response){
            var followStatusAry = response.listData ? response.listData.datas : [];
            var picUrlAry,picUrl_str;
            for(var i =0;i<followStatusAry.length;i++){
                picUrlAry = new Array();
                picUrl_str = followStatusAry[i].picUrl;
                if(picUrl_str != null){
                    if(picUrl_str.indexOf(",")>-1){
                        picUrlAry = picUrl_str.split(",");
                    }else{
                        picUrlAry.push(followStatusAry[i].picUrl);
                    }
                }
                followStatusAry[i].picUrlAry = picUrlAry;
            }
            $scope.followStatus_List = followStatusAry;
        });

        function loginOut() {

            $rootScope.cookie.remove('sessionId');
            $rootScope.cookie.remove('isregister');

            Login.loginOut().success(function (response) {

                alert(response.message);

                $window.location.href = "../../index.html";

            });

        }

        // 模态框
        
        $scope.add_followStatus = add_followStatus;

        function add_followStatus() {
            var modalInstance = $uibModal.open({
                size: 'md',
                animation: true,
                templateUrl: '/html/addFollowStatusTemp.html',
                controller: 'ModalAddFollowStatusController',
                resolve: {
                }
            });
            modalInstance.closed.then();
        }
        

    }])

    .controller('ModalAddFollowStatusController',
        function ($scope,$window, $uibModalInstance,Customer) {
            var url= $window.location.search;
            var customerId = url.split("=")[1];
            $scope.add_status = add_status;
            function add_status(remark) {
                // alert(remark + " -----");
                if($scope.remark != "") {
                    Customer.addCustomerFollowStatus({
                        customerId: customerId,
                        remark: remark
                    }).success(function (response) {


                        if (response.state == 0) {
                            alert(response.message);
                            $uibModalInstance.close();
                        }

                    });
                }else{
                    alert("请设置备注内容！");
                }

            }

        });


