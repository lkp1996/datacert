'use strict';

angular.module('myApp.newOrganization', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/newOrganization', {
            templateUrl: 'newOrganization/newOrganization.html',
            controller: 'NewOrganizationCtrl'
        });
    }])

    .controller('NewOrganizationCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {


    }]);