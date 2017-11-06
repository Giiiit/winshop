/**
 * Created by zx on 2016/7/2.
 */

'use strict';

angular.module('contractDetail',['ngRoute','service','ui.bootstrap'])
    .controller('contractDetailController', ['Contract','$scope','$window','$uibModal','$cookies', '$rootScope','Login',
        function (Contract, $scope, $window,$uibModal,$cookies,$rootScope, Login) {
            $rootScope.cookie = $cookies;
            $scope.loginOut = loginOut;
            var url= $window.location.search;
            var contractId = url.split("=")[1];

            Contract.getContractDetail({
                contractId:contractId
            }).success(function (response) {
                $scope.contractDtl = response.data ? response.data:null;
            });
            
            Contract.getContractMeasureList({
                contractId:contractId
            }).success(function (response) {

                // $scope.contractdetail_list = response.listData ? response.listData.datas : [];
                var contractInfoAry = response.listData ? response.listData.datas : [];
                var picUrlAry,picUrl_str;
                for(var i =0;i<contractInfoAry.length;i++){
                    picUrlAry = new Array();
                    picUrl_str = contractInfoAry[i].picUrl;
                    if(picUrl_str != null){
                        if(picUrl_str.indexOf(",")>-1){
                            picUrlAry = picUrl_str.split(",");
                        }else{
                            picUrlAry.push(contractInfoAry[i].picUrl);
                        }
                    }
                    contractInfoAry[i].picUrlAry = picUrlAry;
                }
                $scope.contractdetail_list = contractInfoAry;

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

            $scope.edit_contractdetail = edit_contractdetail;

            function edit_contractdetail() {
                var modalInstance = $uibModal.open({
                    size: 'md',
                    animation: true,
                    templateUrl: '/html/editContractDetailTemp.html',
                    controller: 'ModalEditContractDetailController',
                    resolve: {
                    }
                });
                modalInstance.closed.then();
            }

    }])


    .controller('ModalEditContractDetailController', ['Contract','$scope','$window',
        function (Contract, $scope,$window) {
            var url= $window.location.search;
            var contractId = url.split("=")[1];
            Contract.getContractDetail({
                contractId:contractId
            }).success(function (response) {
                $scope.contractDtl2 = response.data ? response.data:null;
            });

            // var url= $window.location.search;
            // var customerId = url.split("=")[1];
            // $scope.edit_detail = edit_detail;
            // function edit_detail(remark) {
            //     // alert(remark + " -----");
            //     if($scope.remark != "") {
            //         Customer.addCustomerFollowStatus({
            //             customerId: customerId,
            //             remark: remark
            //         }).success(function (response) {
            //
            //
            //             if (response.state == 0) {
            //                 alert(response.message);
            //                 $uibModalInstance.close();
            //             }
            //
            //         });
            //     }else{
            //         alert("请设置备注内容！");
            //     }
            //
            // }

        }]);
