/**
 * Created by zhengxing on 2016/6/28.
 */
'use strict';

angular.module('contract',['ui.bootstrap'])
    .controller('PrintController', ['$scope', '$uibModal', function ($scope, $uibModal) {

        $scope.open_print = open_print;

        function open_print() {
            var modalInstance = $uibModal.open({
                size: 'lg',
                animation: true,
                templateUrl: '/html/printTemp.html',
                controller: 'ModalPrintContractController',
                resolve: {
                    contract: function () {

                        return $scope.contract;

                    },
                    order_list: function () {

                        return $scope.order_list;

                    }
                }
            });

        }
        


    }])

    .controller('ModalPrintContractController',function ($scope, $uibModalInstance) {

            $scope.print = print;

            function print() {

                var element = document.getElementById('modal-print_contract');

                var body = document.getElementsByTagName('body')[0];

                var element_momento = [];

                while (body.firstChild) {
                    element_momento.push(body.firstChild);
                    var oldNode = body.removeChild(body.firstChild);
                }

                body.appendChild(element);

                //location.reload()

                window.print();

                $uibModalInstance.close();

                body.removeChild(body.firstChild);

                _.each(element_momento,function(element){

                    body.appendChild(element);

                });

            }

    });

