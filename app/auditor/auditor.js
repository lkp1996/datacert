'use strict';

angular.module('myApp.auditor', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/auditor', {
            templateUrl: 'auditor/auditor.html',
            controller: 'AuditorCtrl'
        });
    }])

    .controller('AuditorCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {
        $scope.modified = false;

        $scope.auditor = {
            "pk_auditor": 1,
            "firstName": "Luke",
            "lastName": "Perrottet",
            "phone": "+41787716628",
            "email": "lukeperrottet@gmail.com"
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
    }]);