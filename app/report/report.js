'use strict';

angular.module('myApp.report', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/report', {
            templateUrl: 'report/report.html',
            controller: 'ReportCtrl'
        });
    }])

    .controller('ReportCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {
        $scope.modified = false;

        $scope.tabs = [
            {
                name: "Informations générales",
                disabled: false
            },
            {
                name: "Plan d'audit",
                disabled: false
            },
            {
                name: "Equipe d’audit et audités",
                disabled: false
            },
            {
                name: "Impression générale",
                disabled: false
            },
            {
                name: "Constats d'audit",
                disabled: false
            },
            {
                name: "Conclusion",
                disabled: false
            },
            {
                name: "Décision de certification",
                disabled: false
            },
            {
                name: "Décision de certification",
                disabled: false
            },
            {
                name: "Documentations liées à l’audit",
                disabled: false
            }
        ];

        $scope.generalInfos = {
            "pk_details": 1,
            "auditDates": [
                {
                    "pk_auditDate": 1,
                    "auditDate": ""
                },
                {
                    "pk_auditDate": 2,
                    "auditDate": ""
                }
            ],
            "organizationChangesSinceLastAudit": "",
            "auditPreparation": "",
            "auditMethod": "",
            "standards": "",
            "otherStandards": "",
            "auditTypes": [
                {
                    "pk_auditType": 1,
                    "type": "type1"
                },
                {
                    "pk_auditType": 2,
                    "type": "type2"
                },
                {
                    "pk_auditType": 3,
                    "type": "type3"
                },
                {
                    "pk_auditType": 4,
                    "type": "type4"
                }
            ],
            "certificationBody": "",
            "lastAuditTypes": [
                {
                    "pk_lastAuditType": 1,
                    "type": "type1"
                },
                {
                    "pk_lastAuditType": 2,
                    "type": "type2"
                },
                {
                    "pk_lastAuditType": 3,
                    "type": "type3"
                },
                {
                    "pk_lastAuditType": 4,
                    "type": "type4"
                }
            ],
            "managementSystemChangesSinceLastAudit": "",
            "referenceDoc": "",
            "auditFrequency": "",
            "numberAuditDays": "",
            "auditSiteDuration": "",
            "auditScope": "",
            "excludedProductsAndActivities": "",
            "applicationDomain": "",
            "outsourcedProcessOrProducts": "",
            "standardExclusion": "",
            "iafScopes1": [
                {
                    "pk_iafScope1": 1,
                    "scope": "scope1"
                },
                {
                    "pk_iafScope1": 2,
                    "scope": "scope2"
                },
                {
                    "pk_iafScope1": 3,
                    "scope": "scope3"
                },
                {
                    "pk_iafScope1": 4,
                    "scope": "scope4"
                },
                {
                    "pk_iafScope1": 5,
                    "scope": "scope5"
                }

            ],
            "iafScopes2": [
                {
                    "pk_iafScope1": 1,
                    "scope": "scope1"
                },
                {
                    "pk_iafScope1": 2,
                    "scope": "scope2"
                },
                {
                    "pk_iafScope1": 3,
                    "scope": "scope3"
                },
                {
                    "pk_iafScope1": 4,
                    "scope": "scope4"
                },
                {
                    "pk_iafScope1": 5,
                    "scope": "scope5"
                }

            ],
            "iafScopes3": [
                {
                    "pk_iafScope1": 1,
                    "scope": "scope1"
                },
                {
                    "pk_iafScope1": 2,
                    "scope": "scope2"
                },
                {
                    "pk_iafScope1": 3,
                    "scope": "scope3"
                },
                {
                    "pk_iafScope1": 4,
                    "scope": "scope4"
                },
                {
                    "pk_iafScope1": 5,
                    "scope": "scope5"
                }

            ]
        };

        $scope.auditPlan = {
            "pk_auditPlan": 1,
            "auditManager": "",
            "auditors": [
                {
                    "pk_auditors": 1,
                    "name": ""
                },
                {
                    "pk_auditors": 2,
                    "name": ""
                },
                {
                    "pk_auditors": 3,
                    "name": ""
                },
                {
                    "pk_auditors": 4,
                    "name": ""
                },
                {
                    "pk_auditors": 5,
                    "name": ""
                }
            ],
            plans: [
                {
                    "pk_plan": 1,
                    "startDate": new Date(),
                    "endDate": new Date(),
                    "place": "",
                    "auditedStaff": "",
                    "auditedServicesAndProccesses": "",
                    "standardChapter1": "",
                    "standardChapter2": "",
                    "standardChapter3": "",
                    "auditor": ""
                },
                {
                    "pk_plan": 2,
                    "startDate": new Date(),
                    "endDate": new Date(),
                    "place": "",
                    "auditedStaff": "",
                    "auditedServicesAndProccesses": "",
                    "standardChapter1": "",
                    "standardChapter2": "",
                    "standardChapter3": "",
                    "auditor": ""
                },
                {
                    "pk_plan": 3,
                    "startDate": new Date(),
                    "endDate": new Date(),
                    "place": "",
                    "auditedStaff": "",
                    "auditedServicesAndProccesses": "",
                    "standardChapter1": "",
                    "standardChapter2": "",
                    "standardChapter3": "",
                    "auditor": ""
                }
            ]

        };

        $scope.modif = function () {
            $scope.modified = true;
            angular.forEach($scope.tabs, function (tab, key) {
                if ($scope.active != key) {
                    tab.disabled = true;
                }
            });
        };

        $scope.updateGeneralInfos = function () {
            $scope.modified = false;
        };

        $scope.updateAuditPlan = function () {
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

        $scope.addAuditDateRow = function () {
            if (!Array.isArray($scope.generalInfos.auditDates)) {
                $scope.generalInfos.auditDates = [{"pk_auditDate": 0, "auditDate": ""}];
            } else {
                $scope.generalInfos.auditDates.push({"pk_auditDate": 0, "auditDate": ""});
            }
        };

        $scope.addAuditorRow = function () {
            if (!Array.isArray($scope.auditPlan.auditors)) {
                $scope.auditPlan.auditors = [{"pk_auditors": 0, "name": ""}];
            } else {
                $scope.auditPlan.auditors.push({"pk_auditors": 0, "name": ""});
            }
        };

        $scope.addPlanRow = function () {
            if (!Array.isArray($scope.auditPlan.plans)) {
                $scope.auditPlan.plans = [{
                    "pk_plan": 0,
                    "startDate": new Date(),
                    "endDate": new Date(),
                    "place": "",
                    "auditedStaff": "",
                    "auditedServicesAndProccesses": "",
                    "standardChapter1": "",
                    "standardChapter2": "",
                    "standardChapter3": "",
                    "auditor": ""
                }];
            } else {
                $scope.auditPlan.plans.push({
                    "pk_plan": 0,
                    "startDate": new Date(),
                    "endDate": new Date(),
                    "place": "",
                    "auditedStaff": "",
                    "auditedServicesAndProccesses": "",
                    "standardChapter1": "",
                    "standardChapter2": "",
                    "standardChapter3": "",
                    "auditor": ""
                });
            }
        }
    }]);