'use strict';

angular.module('myApp.organizations', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/organizations/', {
            templateUrl: 'organizations/organizations.html',
            controller: 'OrganizationsCtrl'
        });
    }])

    .controller('OrganizationsCtrl', ['$scope', '$rootScope', '$location', '$http', 'Constant', function ($scope, $rootScope, $location, $http, Constant) {
        $scope.organizations = [];

        $scope.goTo = function (id) {
            $location.path("/organization/" + id);
        };

        $scope.getOrganizations = function(){
            $http.get(Constant.url + "?organizations_list=1").then(
                function (data) {
                    $scope.organizations = data.data;
                }
            );
        };

        $scope.getOrganizations();

    }]);