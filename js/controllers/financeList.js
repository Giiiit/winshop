/**
 * Created by zx on 2016/7/6.
 */
'use strict';

angular.module('financeList',['ngRoute','service','ui.bootstrap'])
    .controller('financeListController', ['Finance','$scope','$cookies','$window', '$rootScope','Login', function (Finance, $scope,$cookies,$window,$rootScope, Login) {
        $rootScope.cookie = $cookies;
        $scope.loginOut = loginOut;
        $scope.getFinanceListByIntervalTime = getFinanceListByIntervalTime;

        function getFinanceListByIntervalTime(){
            function Appendzero(obj)
            {
                if(obj<10) return "0" +""+ obj;
                else return obj;
            }
            var aa = $scope.startDate;
            var d = aa.getDate();
            var m = aa.getMonth()+1;
            var y = aa.getFullYear();
            var AA = y+"-"+Appendzero(m)+"-"+Appendzero(d);
            // var aa = $scope.startDate.toISOString().slice(0,10);
            var bb = $scope.endDate;
            var dd = bb.getDate();
            var mm = bb.getMonth()+1;
            var yyyy = bb.getFullYear();
            var BB = yyyy+"-"+Appendzero(mm)+"-"+Appendzero(dd);
            Finance.getFinanceListByIntervalTime({
                startDate: AA,
                endDate: BB
            }).success(function (response) {

                $scope.fce_title = response.data ? response.data:null;
                $scope.fce_list = response.listData ? response.listData.datas : [];

            });
        }
        function loginOut() {

            $rootScope.cookie.remove('sessionId');
            $rootScope.cookie.remove('isregister');

            Login.loginOut().success(function (response) {

                alert(response.message);

                $window.location.href = "../../index.html";

            });

        }
    }]);