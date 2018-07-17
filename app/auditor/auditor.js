'use strict';

angular.module('myApp.auditor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/auditor', {
    templateUrl: 'auditor/auditor.html',
    controller: 'AuditorCtrl'
  });
}])

.controller('AuditorCtrl', [function() {

}]);