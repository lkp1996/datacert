'use strict';

angular.module('myApp.organization', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/organization', {
            templateUrl: 'organization/organization.html',
            controller: 'OrganizationCtrl'
        });
    }])

    .controller('OrganizationCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {
        $scope.organization = {
            "pk_organization": 1,
            "name": "",
            "addresses": [
                {
                    "pk_address": 1,
                    "np": "",
                    "address": "",
                    "location": "",
                    "country": ""
                },
                {
                    "pk_address": 2,
                    "np": "",
                    "address": "",
                    "location": "",
                    "country": ""
                }
            ],
            "email": "",
            "phone": "",
            "website": "",
            "branches": "",
            "contactLastName": "",
            "contactFirstName": "",
            "generalDescription": "",
            "outsourcedProcessAndProductsDescription": "",
            "headquartersName": "",
            "headquartersNP": "",
            "headquartersAddress": "",
            "headquartersLocation": "",
            "employeesNumber": "",
            "fullTimeNumber": "",
            "changesSinceLastAudit": ""
        };

        $scope.audits = [
            {
                "pk_audit" : 1,
                "reportName" : "audit1",
                "auditDate" : new Date(1514761200000)
            },
            {
                "pk_audit" : 2,
                "reportName" : "audit2",
                "auditDate" : new Date(1483225200000)
            },
            {
                "pk_audit" : 3,
                "reportName" : "audit3",
                "auditDate" : new Date(1451602800000)
            },
            {
                "pk_audit" : 4,
                "reportName" : "audit4",
                "auditDate" : new Date(1420066800000)
            }
        ];

        $scope.tabs = [
            {
                name: "Profil",
                disabled: false
            },
            {
                name: "Audits",
                disabled: false
            }

        ];

        $scope.modif = function () {
            $scope.modified = true;
            angular.forEach($scope.tabs, function (tab, key) {
                if ($scope.active != key) {
                    tab.disabled = true;
                }
            });
        };

        $scope.updateProfile = function () {
            $scope.modified = false;
        };

        $scope.updateDetails = function () {
            $scope.modified = false;
        };

        $scope.cancel = function () {
            $scope.modified = false;
            angular.forEach($scope.tabs, function (tab, key) {
                tab.disabled = false;
            });
        };

        $scope.delRow = function (array, index) {
            if (confirm("Voulez-vous vraiment supprimer cette adresse ?")) {
                array.splice(index, 1);
            }
        };

        $scope.addRow = function (array) {
            if (!Array.isArray(array)) {
                array = [{"pk_address": 0, "np": "", "address": "", "location": "", "country": ""}];
            } else {
                array.push({"pk_address": 0, "np": "", "address": "", "location": "", "country": ""});
            }
        };

        $scope.goTo = function(){
            $location.path("/report");
        };
    }]);