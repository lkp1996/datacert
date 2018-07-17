'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.auditor',
    'myApp.auditors',
    'myApp.home',
    'myApp.organization',
    'myApp.organizations',
    'myApp.newAuditor',
    'myApp.newOrganization',
    'myApp.settings',
    'myApp.checklists',
    'myApp.datePicker',
    'myApp.datePickerSimple',
    'myApp.version',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap',
    'ngMdIcons'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/home'});
}]);
