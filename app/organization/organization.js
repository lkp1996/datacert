'use strict';

angular.module('myApp.organization', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/organization', {
            templateUrl: 'organization/organization.html',
            controller: 'OrganizationCtrl'
        });
    }])

    .controller('OrganizationCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {


    }]);