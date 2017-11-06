/**
 * Created by zx on 2016/5/30.
 */
//var URL="http://192.168.1.25:9080/winshop";

angular.module('login',['ngRoute','service','ngCookies'])
    .config(['$routeProvider', function ($routeProvider){
        $routeProvider
            .when('/',{templateUrl:'client_login.html',controller:'clientController'})
            .when('/sys',{templateUrl:'server_login.html',controller:'serverController'})
            .otherwise({redirectTo:'/sys'});
    }])

    /*****客户端登录处理******/
    .controller('clientController',['$scope','$rootScope','$cookies','$window','Login', 'ServiceHelper',function($scope,$rootScope,$cookies,$window,Login,ServiceHelper){
        $scope.login = login;
        $rootScope.cookie = $cookies;

        function login() {
            $rootScope.cookie.remove('isregister');
            Login.login({
                account: $scope.account,
                password: $scope.password
            }).success(function (response) {
                if (response.state == 0) {
                    $rootScope.cookie.put('sessionId', response.data.sessionId);

                    $rootScope.cookie.put('userName', response.data.userName);

                    $rootScope.cookie.put('userId', response.data.id);
                    // alert(response.data.sessionId);
                    ServiceHelper.setSessionId($rootScope.cookie.get('sessionId'));

                    var register=response.data.isRegister?response.data.isRegister:0;
                    if(register==true){
                        $rootScope.cookie.put('isregister', 1);
                    }else{
                        $window.location.href = "../../html/customer_list.html";
                    }
                } else {
                    alert(response.message);
                }
            })
        }
    }])


    /*******服务器端登录处理*****************/
    .controller('serverController',function($scope){

    })

    .directive('loginBox',function(){
        return{
            restrict : 'A',
            controller:function($scope,$element){
               $scope.$watch('window', function(){
                   var top = (window.innerHeight - 240)/2 + 'px';
                    $element.css('margin-top',top);

               });
            }
        };
    });

function changePic(){
    return window.innerHeight;
}