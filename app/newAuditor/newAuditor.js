'use strict';

angular.module('myApp.newAuditor', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/newAuditor', {
            templateUrl: 'newAuditor/newAuditor.html',
            controller: 'NewAuditorCtrl'
        });
    }])

    .controller('NewAuditorCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {


    }]);