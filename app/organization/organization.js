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
        $scope.addresses = [];

        $scope.getOrganizationProfile = function () {
            $http.get(Constant.url + "?organizations_profile=" + $routeParams.organizationId).then(
                function (data) {
                    $scope.organization = data.data[0];
                    $scope.organization.employeesNumber = $scope.organization.employeesNumber - 0;
                    $scope.organization.fullTimeNumber = $scope.organization.fullTimeNumber - 0
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

        $scope.getAddresses = function () {
            $http.get(Constant.url + "?addresses=" + $routeParams.organizationId).then(
                function (data) {
                    $scope.addresses = data.data;
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
            $http.post(Constant.url,
                $scope.organization
            ).then(
                function (data) {
                    $scope.updateAddresses();
                }
            );
        };

        $scope.updateAddresses = function () {
            $http.post(Constant.url,
                $scope.addresses
            ).then(
                function (data) {
                    $scope.cancel();
                }
            );
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
                array = [{
                    "pk_address": 0,
                    "np": "",
                    "address": "",
                    "location": "",
                    "country": "",
                    "fk_organization": "1"
                }];
            } else {
                array.push({
                    "pk_address": 0,
                    "np": "",
                    "address": "",
                    "location": "",
                    "country": "",
                    "fk_organization": "1"
                });
            }
        };

        $scope.goTo = function (id) {
            $location.path("/report/" + id);
        };

        $scope.getOrganizationProfile();
        $scope.getAddresses();
        $scope.getOrganizationAuditsList();
    }]);