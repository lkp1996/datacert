'use strict';

angular.module('myApp.report', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/report/:reportId', {
            templateUrl: 'report/report.html',
            controller: 'ReportCtrl'
        });
    }])

    .controller('ReportCtrl', ['$scope', '$rootScope', '$location', '$http', 'fileUpload', 'Constant', '$routeParams', function ($scope, $rootScope, $location, $http, fileUpload, Constant, $routeParams) {
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
                name: "Checklists",
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
                name: "Documentations liées à l’audit",
                disabled: false
            }
        ];

        $scope.generalInfos = {};

        $scope.auditDates = [];

        $scope.auditTypes = [];

        $scope.scopes = [];

        $scope.auditScopes = [];

        $scope.plans = [];

        $scope.auditManager = {};

        $scope.auditors = [];

        $scope.checklists = [];

        $scope.otherChecklists = [];

        $scope.generalFeelingsMS = [];

        $scope.generalFeelingsM = [];

        $scope.generalFeelingsPerf = [];

        $scope.generalFeelingsProd = [];

        $scope.generalFeelingsRess = [];

        $scope.auditedPeople = [];

        $scope.interpretations = [];

        $scope.standards = [];

        $scope.auditReports = [];

        $scope.conclusionsReview = [];

        $scope.conclusionsComments = [];

        $scope.conclusionsCompliance = [];

        $scope.conclusionsNoncompliance = [];

        $scope.conclusion = {};

        $scope.documents = [];

        $scope.certificationDecision = {};

        $scope.status = [];

        $scope.auditReportAttachements = [];
        $scope.documentsAttachements = [];

        $scope.getReportGeneralInfos = function () {
            $http.get(Constant.url + "?report_general_infos=" + $routeParams.reportId).then(
                function (data) {
                    $scope.generalInfos = data.data[0];
                    $scope.generalInfos.numberAuditDays = $scope.generalInfos.numberAuditDays - 0;
                    $scope.generalInfos.auditSiteDuration = $scope.generalInfos.auditSiteDuration - 0;
                }
            );
        };

        $scope.getAuditDates = function () {
            $http.get(Constant.url + "?audit_dates=" + $routeParams.reportId).then(
                function (data) {
                    $scope.auditDates = data.data;
                    angular.forEach($scope.auditDates, function (auditDate, key) {
                        auditDate.auditDate = new Date(auditDate.auditDate - 0);
                    });
                }
            );
        };

        $scope.getAuditTypes = function () {
            $http.get(Constant.url + "?auditType_list").then(
                function (data) {
                    $scope.auditTypes = data.data;
                }
            );
        };

        $scope.getScopes = function () {
            $http.get(Constant.url + "?scopes").then(
                function (data) {
                    $scope.scopes = data.data;
                }
            );
        };

        $scope.getAuditScopes = function () {
            $http.get(Constant.url + "?audit_scopes=" + $routeParams.reportId).then(
                function (data) {
                    console.log(data);
                    if (data.data != "null")
                        $scope.auditScopes = data.data;
                }
            );
        };

        $scope.getPlan = function () {
            $http.get(Constant.url + "?auditPlan_plan=" + $routeParams.reportId).then(
                function (data) {
                    $scope.plans = data.data;
                }
            );
        };

        $scope.getAuditManager = function () {
            $http.get(Constant.url + "?auditPlan_auditManager=" + $routeParams.reportId).then(
                function (data) {
                    $scope.auditManager = data.data[0];
                }
            );
        };

        $scope.getAuditors = function () {
            $http.get(Constant.url + "?auditPlan_auditors_list=" + $routeParams.reportId).then(
                function (data) {
                    $scope.auditors = data.data;
                }
            );
        };

        $scope.getChecklists = function () {
            $http.get(Constant.url + "?checklist_names=" + $routeParams.reportId).then(
                function (data) {
                    $scope.checklists = data.data;
                    angular.forEach($scope.checklists, function (checklist, key) {
                        $http.get(Constant.url + "?report_checklist_questions=" + checklist.pk_report_checklist).then(
                            function (data) {
                                checklist.questions = data.data;
                            }
                        );
                    });
                }
            );
        };

        $scope.getOtherChecklists = function () {
            $http.get(Constant.url + "?other_checklist_names=" + $routeParams.reportId).then(
                function (data) {
                    $scope.otherChecklists = data.data;
                }
            );
        };

        $scope.getAuditedPeople = function () {
            $http.get(Constant.url + "?auditedPeople_list=" + $routeParams.reportId).then(
                function (data) {
                    $scope.auditedPeople = data.data;
                    angular.forEach($scope.auditedPeople, function (auditedPerson, key) {
                        auditedPerson.auditDate = new Date(auditedPerson.auditDate - 0);
                    });
                }
            );
        };

        $scope.getGeneralFeelingsManagementSystem = function () {
            $http.get(Constant.url + "?generalFeelingManagementSystem=" + $routeParams.reportId).then(
                function (data) {
                    $scope.generalFeelingsMS = data.data;
                }
            );
        };

        $scope.getGeneralFeelingsManagement = function () {
            $http.get(Constant.url + "?generalFeelingManagement=" + $routeParams.reportId).then(
                function (data) {
                    $scope.generalFeelingsM = data.data;
                }
            );
        };

        $scope.getGeneralFeelingsPerformance = function () {
            $http.get(Constant.url + "?generalFeelingPerformance=" + $routeParams.reportId).then(
                function (data) {
                    $scope.generalFeelingsPerf = data.data;
                }
            );
        };

        $scope.getGeneralFeelingsProduction = function () {
            $http.get(Constant.url + "?generalFeelingProduction=" + $routeParams.reportId).then(
                function (data) {
                    $scope.generalFeelingsProd = data.data;
                }
            );
        };

        $scope.getGeneralFeelingsRessource = function () {
            $http.get(Constant.url + "?generalFeelingRessource=" + $routeParams.reportId).then(
                function (data) {
                    $scope.generalFeelingsRess = data.data;
                }
            );
        };

        $scope.getAuditReports = function () {
            $http.get(Constant.url + "?auditReports_list=" + $routeParams.reportId).then(
                function (data) {
                    $scope.auditReports = data.data;
                }
            );
        };

        $scope.getStandards = function () {
            $http.get(Constant.url + "?standards").then(
                function (data) {
                    $scope.standards = data.data;
                }
            );
        };

        $scope.getInterpretation = function () {
            $http.get(Constant.url + "?interpretations").then(
                function (data) {
                    $scope.interpretations = data.data;
                }
            );
        };

        $scope.getConclusion = function () {
            $http.get(Constant.url + "?conclusion=" + $routeParams.reportId).then(
                function (data) {
                    $scope.conclusion = data.data[0];
                    $scope.conclusion.nextAuditFirstDaysDate = new Date($scope.conclusion.nextAuditFirstDaysDate - 0);
                }
            );
        };

        $scope.getConclusionComment = function () {
            $http.get(Constant.url + "?conclusionComments=" + $routeParams.reportId).then(
                function (data) {
                    $scope.conclusionsComments = data.data;
                }
            );
        };

        $scope.getConclusionCompliance = function () {
            $http.get(Constant.url + "?conclusionCompliance=" + $routeParams.reportId).then(
                function (data) {
                    $scope.conclusionsCompliance = data.data;
                }
            );
        };

        $scope.getConclusionNoncompliance = function () {
            $http.get(Constant.url + "?conclusionNoncompliance=" + $routeParams.reportId).then(
                function (data) {
                    $scope.conclusionsNoncompliance = data.data;
                }
            );
        };

        $scope.getConclusionReview = function () {
            $http.get(Constant.url + "?conclusionReview=" + $routeParams.reportId).then(
                function (data) {
                    $scope.conclusionsReview = data.data;
                }
            );
        };

        $scope.getCertificationDecision = function () {
            $http.get(Constant.url + "?certificationDecision=" + $routeParams.reportId).then(
                function (data) {
                    $scope.certificationDecision = data.data[0];
                    $scope.certificationDecision.decisionDate = new Date($scope.certificationDecision.decisionDate - 0);
                }
            );
        };

        $scope.getStatus = function () {
            $http.get(Constant.url + "?status_list").then(
                function (data) {
                    $scope.status = data.data;
                }
            );
        };

        $scope.getDocuments = function () {
            $http.get(Constant.url + "?variousDocuments=" + $routeParams.reportId).then(
                function (data) {
                    $scope.documents = data.data;
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

        $scope.updateGeneralInfos = function () {
            $http.post(Constant.url,
                $scope.generalInfos
            ).then(
                function (data) {
                    $scope.updateAuditDate();
                }
            );
        };

        $scope.updateAuditDate = function () {
            angular.forEach($scope.auditDates, function (auditDate, key) {
                auditDate.auditDate = new Date(auditDate.auditDate).getTime();
            });
            $http.post(Constant.url,
                $scope.auditDates
            ).then(
                function (data) {
                    $scope.updateAuditScopes();
                }
            );
        };

        $scope.updateAuditScopes = function () {
            $http.post(Constant.url,
                $scope.auditScopes
            ).then(
                function (data) {
                    $scope.cancel();
                }
            );
        };

        $scope.updateAuditPlan = function () {
            angular.forEach($scope.plans, function (plan, key) {
                plan.startDate = new Date(plan.startDate).getTime();
                plan.endDate = new Date(plan.endDate).getTime();
            });
            /*$http.post(Constant.url,
                $scope.auditManager
            ).then(
                function (data) {
                    $http.post(Constant.url,
                        $scope.auditors
                    ).then(
                        function (data) {
                            $http.post(Constant.url,
                                $scope.plans
                            ).then(
                                function (data) {
                                    $scope.cancel();
                                }
                            );
                        }
                    );
                }
            );*/
            $http.post(Constant.url,
                $scope.auditManager
            ).then(
                function (data) {
                    console.log(data.data);
                });

        };

        $scope.updateChecklists = function () {
            $http.post(Constant.url,
                $scope.checklists
            ).then(
                function (data) {
                    $scope.cancel();
                }
            );
        };

        $scope.updateGeneralFeelings = function () {
            $http.post(Constant.url,
                $scope.generalFeelingsM
            ).then(
                function (data) {
                    $http.post(Constant.url,
                        $scope.generalFeelingsMS
                    ).then(
                        function (data) {
                            $http.post(Constant.url,
                                $scope.generalFeelingsPerf
                            ).then(
                                function (data) {
                                    $http.post(Constant.url,
                                        $scope.generalFeelingsProd
                                    ).then(
                                        function (data) {
                                            $http.post(Constant.url,
                                                $scope.generalFeelingsRess
                                            ).then(
                                                function (data) {
                                                    $scope.cancel();
                                                }
                                            );
                                        }
                                    );
                                }
                            );
                        }
                    );
                }
            );
        };

        $scope.updateAuditedPeople = function () {
            $http.post(Constant.url,
                $scope.auditedPeople
            ).then(
                function (data) {
                    $scope.cancel();
                }
            );
        };

        $scope.updateAuditReport = function () {
            $http.post(Constant.url,
                $scope.auditReports
            ).then(
                function (data) {
                    $scope.cancel();
                }
            );
        };

        $scope.updateConclusion = function () {
            $scope.conclusion.nextAuditFirstDaysDate = new Date($scope.conclusion.nextAuditFirstDaysDate).getTime();
            $http.post(Constant.url,
                $scope.conclusion
            ).then(
                function (data) {
                    $http.post(Constant.url,
                        $scope.conclusionsComments
                    ).then(
                        function (data) {
                            $http.post(Constant.url,
                                $scope.conclusionsCompliance
                            ).then(
                                function (data) {
                                    $http.post(Constant.url,
                                        $scope.conclusionsNoncompliance
                                    ).then(
                                        function (data) {
                                            $http.post(Constant.url,
                                                $scope.conclusionsReview
                                            ).then(
                                                function (data) {
                                                    $scope.cancel();
                                                }
                                            );
                                        }
                                    );
                                }
                            );
                        }
                    );
                }
            );
        };

        $scope.updateDocuments = function () {
            $http.post(Constant.url,
                $scope.documents
            ).then(
                function (data) {
                    $scope.cancel();
                }
            );
        };

        $scope.updateCertificationDecision = function () {
            $scope.certificationDecision.decisionDate = new Date($scope.certificationDecision.decisionDate).getTime();
            $http.post(Constant.url,
                $scope.certificationDecision
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
            $scope.getAll();
        };

        $scope.delRow = function (array, index) {
            if (confirm("Voulez-vous vraiment supprimer cet élément ?")) {
                array.splice(index, 1);
            }
        };

        $scope.delChecklist = function (index) {
            if (confirm("Voulez-vous vraiment retirer cette checklist du rapport d'audit ?")) {
                $scope.otherChecklists.push($scope.checklists[index]);
                $scope.checklists.splice(index, 1);
            }
        };

        $scope.addAuditDateRow = function () {
            if (!Array.isArray($scope.auditDates)) {
                $scope.auditDates = [{"pk_auditDate": 0, "auditDate": "", "fk_report": $routeParams.reportId}];
            } else {
                $scope.auditDates.push({"pk_auditDate": 0, "auditDate": "", "fk_report": $routeParams.reportId});
            }
        };

        $scope.addAuditScope = function () {
            if (!Array.isArray($scope.auditScopes)) {
                $scope.auditScopes = [{"pk_reportScope": null, "fk_report": $routeParams.reportId, "fk_scope": "1"}];
            } else {
                $scope.auditScopes.push({"pk_reportScope": null, "fk_report": $routeParams.reportId, "fk_scope": "1"});
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
                    "services": "",
                    "startDate": new Date(1535320800000),
                    "endDate": new Date(1535320800000),
                    "place": "",
                    "auditedStaff": "",
                    "auditor": "",
                    "standardChapter": ""
                }];
            } else {
                $scope.auditPlan.plans.push({
                    "pk_plan": 0,
                    "services": "",
                    "startDate": new Date(1535320800000),
                    "endDate": new Date(1535320800000),
                    "place": "",
                    "auditedStaff": "",
                    "auditor": "",
                    "standardChapter": ""
                });
            }
        };

        $scope.addPositivePointMSRow = function (index) {
            if (!Array.isArray($scope.generalFeelingsMS)) {
                $scope.generalFeelingsMS = [{
                    "pk_generalFeelingManagementSystem": 0,
                    "content": ""
                }];
            } else {
                $scope.generalFeelingsMS.push({
                    "pk_generalFeelingManagementSystem": 0,
                    "content": ""
                });
            }
        };

        $scope.addChecklist = function (index) {
            if (!Array.isArray($scope.checklists)) {
                $scope.checklists = $scope.otherChecklists[index];
            } else {
                $scope.checklists.push($scope.otherChecklists[index]);
            }
            $scope.otherChecklists.splice(index, 1);
        };

        $scope.addTeamAuditRow = function () {
            if (!Array.isArray($scope.auditors)) {
                $scope.auditors = [{
                    "pk_auditor": 0,
                    "lastName": "",
                    "firstName": ""
                }];
            } else {
                $scope.auditors.push({
                    "pk_auditor": 0,
                    "lastName": "",
                    "firstName": ""
                });
            }
        };

        $scope.addAuditedPersonRow = function () {
            if (!Array.isArray($scope.auditedPeople)) {
                $scope.auditedPeople = [{
                    "pk_auditedPeople": 0,
                    "lastName": "",
                    "firstName": "",
                    "function": "",
                    "openingMeeting": false,
                    "onSiteAudit": false,
                    "closingMeeting": false
                }];
            } else {
                $scope.auditedPeople.push({
                    "pk_auditedPeople": 0,
                    "lastName": "",
                    "firstName": "",
                    "function": "",
                    "openingMeeting": false,
                    "onSiteAudit": false,
                    "closingMeeting": false
                });
            }
        };

        $scope.addAuditReport = function () {
            if (!Array.isArray($scope.auditReports)) {
                $scope.auditReports = [{
                    "pk_auditReports": 0,
                    "fk_standard": 0,
                    "fk_interpretation": 0,
                    "chapter": "",
                    "description": "",
                    "noncomplianceDelayTreatment": "",
                    "actionPlan": "",
                    "actionPlanValidation": "",
                    "APVVvalidated": false,
                    "correctiveActionMade": "",
                    "attachement": "",
                    "correctiveActionValidation": "",
                    "CAVValidated": false
                }];
            } else {
                $scope.auditReports.push({
                    "pk_auditReports": 0,
                    "fk_standard": 0,
                    "fk_interpretation": 0,
                    "chapter": "",
                    "description": "",
                    "noncomplianceDelayTreatment": "",
                    "actionPlan": "",
                    "actionPlanValidation": "",
                    "APVVvalidated": false,
                    "correctiveActionMade": "",
                    "attachement": "",
                    "correctiveActionValidation": "",
                    "CAVValidated": false
                });
            }
        };

        $scope.addDocument = function () {
            if (!Array.isArray($scope.documents)) {
                $scope.documents = [{
                    "pk_documents": 0,
                    "name": "",
                    "description": ""
                }];
            } else {
                $scope.documents.push({
                    "pk_documents": 0,
                    "name": "",
                    "description": ""
                });
            }
        };

        $scope.delAuditReportAttachements = function () {

        };

        $scope.uploadFile = function (id, file, type) {
            var uploadUrl = Constant.url;
            fileUpload.uploadFileToUrl(file, uploadUrl, id, type);
        };

        $scope.getAll = function () {
            $scope.getReportGeneralInfos();
            $scope.getAuditDates();
            $scope.getAuditTypes();
            $scope.getScopes();
            $scope.getAuditScopes();
            $scope.getPlan();
            $scope.getAuditManager();
            $scope.getAuditors();
            $scope.getAuditedPeople();
            $scope.getChecklists();
            $scope.getOtherChecklists();
            $scope.getGeneralFeelingsManagementSystem();
            $scope.getGeneralFeelingsManagement();
            $scope.getGeneralFeelingsPerformance();
            $scope.getGeneralFeelingsProduction();
            $scope.getGeneralFeelingsRessource();
            $scope.getAuditReports();
            $scope.getStandards();
            $scope.getInterpretation();
            $scope.getConclusion();
            $scope.getConclusionComment();
            $scope.getConclusionCompliance();
            $scope.getConclusionNoncompliance();
            $scope.getConclusionReview();
            $scope.getStatus();
            $scope.getCertificationDecision();
            $scope.getDocuments();
        };

        $scope.getAll();
    }]);