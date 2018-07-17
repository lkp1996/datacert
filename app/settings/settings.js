'use strict';

angular.module('myApp.settings', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/settings', {
            templateUrl: 'settings/settings.html',
            controller: 'SettingsCtrl'
        });
    }])

    .controller('SettingsCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {


    }]);