'use strict';

angular.module('myApp.auditors', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/auditors', {
            templateUrl: 'auditors/auditors.html',
            controller: 'AuditorsCtrl'
        });
    }])

    .controller('AuditorsCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {
        $scope.auditors = [
            {
                "pk_auditor" : 1,
                "lastName" : "Berset",
                "firstName" : "Marie-Aude\t",
                "phone" : "+41795075783",
                "email" : "m-a.berset@edelcert.ch",
                "currentTitle" : "Administratif, Responsable d'audit"
            },
            {
                "pk_auditor" : 2,
                "lastName" : "Beytrison",
                "firstName" : "Isabelle",
                "phone" : "+41793457140",
                "email" : "i.beytrison@edelcert.ch",
                "currentTitle" : "Auditrice"
            },
            {
                "pk_auditor" : 3,
                "lastName" : "Droux",
                "firstName" : "Alexandra",
                "phone" : "+41765893049",
                "email" : "a.droux@edelcert.ch",
                "currentTitle" : "Responsable d'audit"
            },
            {
                "pk_auditor" : 4,
                "lastName" : "Fournier",
                "firstName" : "Patricia",
                "phone" : "+41797579818",
                "email" : "p.fournier@edelcert.ch",
                "currentTitle" : "Auditrice"
            },
            {
                "pk_auditor" : 5,
                "lastName" : "Gobet",
                "firstName" : "Jean-Claude",
                "phone" : "+41269139409",
                "email" : "j-c.gobet@edelcert.ch",
                "currentTitle" : "Auditeur"
            },{
                "pk_auditor" : 6,
                "lastName" : "Gremaud",
                "firstName" : "Nicolas",
                "phone" : "+41786870478",
                "email" : "n.gremaud@edelcert.ch",
                "currentTitle" : "Auditeur"
            }
        ];

        $scope.goTo = function () {
            $location.path("/auditor");
        };

    }]);