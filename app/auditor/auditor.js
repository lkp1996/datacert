'use strict';

angular.module('myApp.auditor', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/auditor/:auditorId', {
            templateUrl: 'auditor/auditor.html',
            controller: 'AuditorCtrl'
        });
    }])

    .controller('AuditorCtrl', ['$scope', '$rootScope', '$location', '$http', '$routeParams', 'Constant', function ($scope, $rootScope, $location, $http, $routeParams, Constant) {
        $scope.modified = false;

        $scope.auditor = {};
        $scope.auditorId = $routeParams.auditorId;

        $scope.get_auditor_administration = function () {
            $http.get(Constant.url + "?auditor_administration=" + $routeParams.auditorId).then(
                function (data) {
                    $scope.auditor = data.data;
                }
            );
        };

        $scope.modif = function () {
            $scope.modified = true;
        };

        $scope.updateInfos = function () {
            $scope.modified = false;
        };

        $scope.cancel = function () {
            $scope.modified = false;
        };

        $scope.get_auditor_administration();
    }]);