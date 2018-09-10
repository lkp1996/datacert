'use strict';

angular.module('myApp.newAuditor', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/newAuditor', {
            templateUrl: 'newAuditor/newAuditor.html',
            controller: 'NewAuditorCtrl'
        });
    }])

    .controller('NewAuditorCtrl', ['$scope', '$rootScope', '$location', '$http', 'Constant', function ($scope, $rootScope, $location, $http, Constant) {
        $scope.auditor = {};

        $scope.typeList = [];

        $scope.languages = [];

        $scope.add = function () {
            $http.post(Constant.url, $scope.auditor).then(
                function (data) {
                    $scope.auditor = {};
                }
            );
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

        $scope.getAuditorType();
        $scope.getLanguages();
    }]);