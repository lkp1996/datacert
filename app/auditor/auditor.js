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
        $scope.typeList = [];
        $scope.languages = [];

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
            $http.post(Constant.url,
                $scope.auditor
            ).then(
                function (data) {
                    $scope.cancel();
                }
            );
        };

        $scope.cancel = function () {
            $scope.modified = false;
        };

        $scope.getAuditorType = function () {
            $http.get(Constant.url + "?type_list_auditor").then(
                function (data) {
                    $scope.typeList = data.data;
                }
            );
        };

        $scope.getLanguages = function () {
            $http.get(Constant.url + "?language_list").then(
                function (data) {
                    $scope.languages = data.data;
                }
            );
        };

        $scope.get_auditor_administration();
        $scope.getAuditorType();
        $scope.getLanguages();
    }]);