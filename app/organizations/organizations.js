'use strict';

angular.module('myApp.organizations', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/organizations', {
            templateUrl: 'organizations/organizations.html',
            controller: 'OrganizationsCtrl'
        });
    }])

    .controller('OrganizationsCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {
        $scope.organizations = [
            {
                "pk_organization" : 1,
                "name" : "Org 1",
                "location" : "Fribourg"
            },
            {
                "pk_organization" : 2,
                "name" : "Org 2",
                "location" : "Lausanne"
            },
            {
                "pk_organization" : 3,
                "name" : "Org 3",
                "location" : "Genève"
            },
            {
                "pk_organization" : 4,
                "name" : "Org 4",
                "location" : "Bulle"
            },
            {
                "pk_organization" : 5,
                "name" : "Org 5",
                "location" : "Berne"
            }
        ];

        $scope.goTo = function(){
            $location.path("/organization");
        };

    }]);