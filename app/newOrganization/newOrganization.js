'use strict';

angular.module('myApp.newOrganization', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/newOrganization', {
            templateUrl: 'newOrganization/newOrganization.html',
            controller: 'NewOrganizationCtrl'
        });
    }])

    .controller('NewOrganizationCtrl', ['$scope', '$rootScope', '$location', '$http', 'Constant', function ($scope, $rootScope, $location, $http, Constant) {
        $scope.organization = {};

        $scope.add = function () {
            $http.post(Constant.url, $scope.organization).then(
                function (data) {
                    console.log(data.data);
                    $scope.organization = {};
                }
            );
        };
    }]);