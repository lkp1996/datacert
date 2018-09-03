'use strict';

angular.module('myApp.auditors', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/auditors', {
            templateUrl: 'auditors/auditors.html',
            controller: 'AuditorsCtrl'
        });
    }])

    .controller('AuditorsCtrl', ['$scope', '$rootScope', '$location', '$http', 'Constant', function ($scope, $rootScope, $location, $http, Constant) {
        $scope.auditors = [];

        $scope.goTo = function (id) {
            $location.path("/auditor/" + id);
            console.log("/auditor/" + id);
        };

        $scope.getAuditors = function () {
            //$http.get(Constant.url + "?auditors_list=" + $rootScope.connectedUser.id).then(
            $http.get(Constant.url + "?auditors_list=1").then(
                function (data) {
                    $scope.auditors = data.data;
                }
            );
        };

        $scope.getAuditors();

    }]);