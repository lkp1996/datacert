'use strict';

angular.module('myApp.organization', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/organization/:organizationId', {
            templateUrl: 'organization/organization.html',
            controller: 'OrganizationCtrl'
        });
    }])

    .controller('OrganizationCtrl', ['$scope', '$rootScope', '$location', '$http', 'Constant', '$routeParams', function ($scope, $rootScope, $location, $http, Constant, $routeParams) {
        $scope.organization = {};

        $scope.organizationId = $routeParams.organizationId;

        $scope.audits = [];

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

        $scope.getOrganizationProfile = function () {
            $http.get(Constant.url + "?organizations_profile=" + $routeParams.organizationId).then(
                function (data) {
                    $scope.organization = data.data[0];
                }
            );
        };

        $scope.getOrganizationAuditsList = function () {
            $http.get(Constant.url + "?organization_audits_list=" + $routeParams.organizationId).then(
                function (data) {
                    $scope.audits = data.data;
                }
            );
        };

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
            angular.forEach($scope.tabs, function (tab, key) {
                if ($scope.active != key) {
                    tab.disabled = false;
                }
            });
        };

        $scope.updateDetails = function () {
            $scope.modified = false;
            angular.forEach($scope.tabs, function (tab, key) {
                if ($scope.active != key) {
                    tab.disabled = false;
                }
            });
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

        $scope.goTo = function (id) {
            $location.path("/report/" + id);
        };

        $scope.getOrganizationProfile();
        $scope.getOrganizationAuditsList();
    }]);