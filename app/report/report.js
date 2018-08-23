'use strict';

angular.module('myApp.report', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/report', {
            templateUrl: 'report/report.html',
            controller: 'ReportCtrl'
        });
    }])

    .controller('ReportCtrl', ['$scope', '$rootScope', '$location', '$http', 'fileUpload', function ($scope, $rootScope, $location, $http, fileUpload) {
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
            "fk_iafScopes1": 3,
            "fk_iafScopes2": 11,
            "fk_iafScopes3": 39
        };

        $scope.iafScopes = [
            {
                "pk_iafScopes": 1,
                "name": "Agriculture, Hunting, Forestry & Fishing"
            },
            {
                "pk_iafScopes": 2,
                "name": "Mining and Quarrying"
            },
            {
                "pk_iafScopes": 3,
                "name": "Food Products, Beverages and Tobacco"
            },
            {
                "pk_iafScopes": 4,
                "name": "Textiles and Textile Products"
            },
            {
                "pk_iafScopes": 5,
                "name": "Leather and Leather Products"
            },
            {
                "pk_iafScopes": 6,
                "name": "Wood and Wood Products"
            },
            {
                "pk_iafScopes": 7,
                "name": "Pulp, Paper and Paper Products"
            },
            {
                "pk_iafScopes": 8,
                "name": "Publishing Companies"
            },
            {
                "pk_iafScopes": 9,
                "name": "Printing Companies"
            },
            {
                "pk_iafScopes": 10,
                "name": "Coke and Refined Petroleum Products"
            },
            {
                "pk_iafScopes": 11,
                "name": "Nuclear Fuel"
            },
            {
                "pk_iafScopes": 12,
                "name": "Chemicals, Chemical Products and Fibres"
            },
            {
                "pk_iafScopes": 13,
                "name": "Pharmaceuticals"
            },
            {
                "pk_iafScopes": 14,
                "name": "Rubber and Plastic Products"
            },
            {
                "pk_iafScopes": 15,
                "name": "Non-metallic Mineral Products"
            },
            {
                "pk_iafScopes": 16,
                "name": "Concrete, Cement, Lime, Plaster, etc."
            },
            {
                "pk_iafScopes": 17,
                "name": "Basic Metals and Fabricated Metal Products"
            },
            {
                "pk_iafScopes": 18,
                "name": "Machinery and Equipment"
            },
            {
                "pk_iafScopes": 19,
                "name": "Electrical and Optical Equipment"
            },
            {
                "pk_iafScopes": 20,
                "name": "Ship Building"
            },
            {
                "pk_iafScopes": 21,
                "name": "Aerospace"
            },
            {
                "pk_iafScopes": 22,
                "name": "Other Transport Equipment"
            },
            {
                "pk_iafScopes": 23,
                "name": "Manufacturing Not Elsewhere Classified"
            },
            {
                "pk_iafScopes": 24,
                "name": "Recycling"
            },
            {
                "pk_iafScopes": 25,
                "name": "Electricity Supply"
            },
            {
                "pk_iafScopes": 26,
                "name": "Gas Supply"
            },
            {
                "pk_iafScopes": 27,
                "name": "Water Supply"
            },
            {
                "pk_iafScopes": 28,
                "name": "Construction"
            },
            {
                "pk_iafScopes": 29,
                "name": "Wholesale and retail trade; repair of motor vehicles, motorcycles and personal and household goods"
            },
            {
                "pk_iafScopes": 30,
                "name": "Hotels and Restaurants"
            },
            {
                "pk_iafScopes": 31,
                "name": "Transport, Storage and Communications"
            },
            {
                "pk_iafScopes": 32,
                "name": "Financial Intermediation, Real Estate, Renting"
            },
            {
                "pk_iafScopes": 33,
                "name": "Information Technology"
            },
            {
                "pk_iafScopes": 34,
                "name": "Engineering Services"
            },
            {
                "pk_iafScopes": 35,
                "name": "Other Services"
            },
            {
                "pk_iafScopes": 36,
                "name": "Public Administration"
            },
            {
                "pk_iafScopes": 37,
                "name": "Education"
            },
            {
                "pk_iafScopes": 38,
                "name": "Health and Social Work"
            },
            {
                "pk_iafScopes": 39,
                "name": "Other Social Services"
            }
        ];

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

        $scope.checklists = [
            {
                "pk_checklist": 1,
                "name": "checklist1",
                "questions": [
                    {
                        "pk_question": 1,
                        "name": "s’il existe un doute significatif quant à la mise en place d’une maîtrise efficace des processus ou si des produits ou services remplissent les exigences spécifiées;",
                        "yesno": false,
                        "comment": "aaaaaaaaaaaaaaaaaaa"
                    },
                    {
                        "pk_question": 2,
                        "name": "check2",
                        "yesno": true,
                        "comment": "fads"
                    },
                    {
                        "pk_question": 3,
                        "name": "check3",
                        "yesno": false,
                        "comment": "wter"
                    }
                ]
            },
            {
                "pk_checklist": 2,
                "name": "checklist2",
                "questions": [
                    {
                        "pk_question": 4,
                        "name": "check4",
                        "yesno": true,
                        "comment": "gfdx"
                    },
                    {
                        "pk_question": 5,
                        "name": "check5",
                        "yesno": true,
                        "comment": "cvby"
                    },
                    {
                        "pk_question": 6,
                        "name": "check6",
                        "yesno": false,
                        "comment": "uztrf"
                    }

                ]
            }
        ];

        $scope.otherChecklists = [
            {
                "pk_checklist": 3,
                "name": "checklist3",
                "questions": [
                    {
                        "pk_question": 7,
                        "name": "check7",
                        "yesno": false,
                        "comment": ""
                    },
                    {
                        "pk_question": 8,
                        "name": "check8",
                        "yesno": false,
                        "comment": ""
                    },
                    {
                        "pk_question": 9,
                        "name": "check9",
                        "yesno": false,
                        "comment": ""
                    }

                ]
            },
            {
                "pk_checklist": 4,
                "name": "checklist4",
                "questions": [
                    {
                        "pk_question": 10,
                        "name": "check10",
                        "yesno": false,
                        "comment": ""
                    },
                    {
                        "pk_question": 11,
                        "name": "check11",
                        "yesno": false,
                        "comment": ""
                    },
                    {
                        "pk_question": 12,
                        "name": "check12",
                        "yesno": false,
                        "comment": ""
                    }

                ]
            },
            {
                "pk_checklist": 5,
                "name": "checklist5",
                "questions": [
                    {
                        "pk_question": 13,
                        "name": "check13",
                        "yesno": false,
                        "comment": ""
                    },
                    {
                        "pk_question": 14,
                        "name": "check14",
                        "yesno": false,
                        "comment": ""
                    },
                    {
                        "pk_question": 15,
                        "name": "check15",
                        "yesno": false,
                        "comment": ""
                    }

                ]
            }
        ];

        $scope.generalFeelings = [
            {
                "pk_generalFeelings": 1,
                "name": "Impression générale – Système de management, contexte de l’organisation",
                "positivePoints": [
                    {
                        "pk_positivePoints": 1,
                        "content": "L'analyse du contexte permet d'identifier des pistes d'améliorations et permet de réaliser une veille active par rapport à la concurrence"
                    },
                    {
                        "pk_positivePoints": 2,
                        "content": "L'analyse des opportunités et des menaces prend en compte les 4 domaines développé dans le référentiel Swiss School Impulse."
                    },
                    {
                        "pk_positivePoints": 3,
                        "content": "L'organisation du projet réalisée dans un premier temps par une modélisation socio-économique"
                    }
                ],
                "pointsToImprove": "Merci de vous référer aux constats d'audit"
            },
            {
                "pk_generalFeelings": 2,
                "name": "Impression générale - Management, Leadership et planification",
                "positivePoints": [
                    {
                        "pk_positivePoints": 4,
                        "content": "La revue de fonctionnement global et les objectifs issus du projet d'établissement"
                    },
                    {
                        "pk_positivePoints": 5,
                        "content": "Les responsabilités et autorités nécessaires au bon fonctionnement du projet sont clairement explicités"
                    }
                ],
                "pointsToImprove": "Merci de vous référer aux constats d'audit"
            },
            {
                "pk_generalFeelings": 3,
                "name": "Impression générale – Ressources / support",
                "positivePoints": [
                    {
                        "pk_positivePoints": 6,
                        "content": "Les ressources nécessaires pour réaliser le projet sont identifiées"
                    },
                    {
                        "pk_positivePoints": 7,
                        "content": "La réalisation des revues de projet est planifiée afin de s’assurer de la disponibilité de ressources suffisantes pour répondre aux objectifs du projet"
                    },
                    {
                        "pk_positivePoints": 8,
                        "content": "Les compétences nécessaires en termes de formation initiale et professionnelle, de connaissances et d’expérience pour les membres du personnel travaillant sur les actions liées au projet sont reconnues"
                    },
                    {
                        "pk_positivePoints": 9,
                        "content": "L'environnement de travail encourage l’excellence et l'efficacité des relations de travail, la confiance, le respect au sein de l’équipe et envers toutes les autres personnes impliquées dans le projet"
                    }
                ],
                "pointsToImprove": "Merci de vous référer aux constats d'audit"
            },
            {
                "pk_generalFeelings": 4,
                "name": "Impression générale – Réalisation / opérations",
                "positivePoints": [
                    {
                        "pk_positivePoints": 10,
                        "content": "Les objectifs d'ajustement et de stabilisation des pratiques pédagogique"
                    },
                    {
                        "pk_positivePoints": 11,
                        "content": "La recherche d'augmentation des compétences individuelles liées à l'utilisation des nouvelles technologies de l'information"
                    },
                    {
                        "pk_positivePoints": 12,
                        "content": "La clarification des activités clés à mener lors du processus d'admission des élèves."
                    },
                    {
                        "pk_positivePoints": 13,
                        "content": "Les réflexions en cours concernant la gestion des ressources clés : informatique et finances"
                    }
                ],
                "pointsToImprove": "Merci de vous référer aux constats d'audit"
            },
            {
                "pk_generalFeelings": 5,
                "name": "Impression générale – Evaluations de la performance / améliorations",
                "positivePoints": [
                    {
                        "pk_positivePoints": 14,
                        "content": "Le suivi des améliorations au quotidien fait partie de la culture de l'établissement"
                    },
                    {
                        "pk_positivePoints": 15,
                        "content": "Les séances administratives et pédagogiques qui permettent favorise la concertation et les aspects décisionnels"
                    }
                ],
                "pointsToImprove": "Merci de vous référer aux constats d'audit"
            }
        ];

        $scope.leadAuditor = {
            "pk_leadAuditor": 1,
            "lastName": "Perrottet",
            "firstName": "Stéphane"
        };

        $scope.auditors = [
            {
                "pk_auditor": 1,
                "lastName": "auditor1",
                "firstName": "auditor1"
            },
            {
                "pk_auditor": 2,
                "lastName": "auditor2",
                "firstName": "auditor2"
            },
            {
                "pk_auditor": 3,
                "lastName": "auditor3",
                "firstName": "auditor3"
            }
        ];

        $scope.auditedPeople = [
            {
                "pk_auditedPeople": 1,
                "lastName": "auditedPeople1",
                "firstName": "auditedPeople1",
                "function": "function",
                "openingMeeting": false,
                "onSiteAudit": true,
                "closingMeeting": false
            },
            {
                "pk_auditedPeople": 2,
                "lastName": "auditedPeople2",
                "firstName": "auditedPeople2",
                "function": "function",
                "openingMeeting": true,
                "onSiteAudit": true,
                "closingMeeting": true
            },
            {
                "pk_auditedPeople": 3,
                "lastName": "auditedPeople3",
                "firstName": "auditedPeople3",
                "function": "function",
                "openingMeeting": true,
                "onSiteAudit": false,
                "closingMeeting": true
            },
            {
                "pk_auditedPeople": 4,
                "lastName": "auditedPeople4",
                "firstName": "auditedPeople4",
                "function": "function",
                "openingMeeting": true,
                "onSiteAudit": true,
                "closingMeeting": false
            }
        ];

        $scope.interpretations = [
            {
                "pk_interpretation": 1,
                "name": "Recommandation"
            },
            {
                "pk_interpretation": 2,
                "name": "Piste de progrès"
            },
            {
                "pk_interpretation": 3,
                "name": "Non-Conformité mineure"
            },
            {
                "pk_interpretation": 4,
                "name": "Non-Conformité majeure"
            }
        ];

        $scope.standards = [
            {
                "pk_standards": 1,
                "standard": "ISO 9001 : 2015"
            },
            {
                "pk_standards": 2,
                "standard": "ISO 14001 : 2015"
            },
            {
                "pk_standards": 3,
                "standard": "ISO 45001 : 2018"
            },
            {
                "pk_standards": 4,
                "standard": "ISO 29990 : 2011"
            },
            {
                "pk_standards": 5,
                "standard": "ISO 21001 : 2018"
            },
            {
                "pk_standards": 6,
                "standard": "QuaTheDA : 2012"
            },
            {
                "pk_standards": 7,
                "standard": "EcoEntreprise : 2013"
            },
            {
                "pk_standards": 8,
                "standard": "Swiss School Impulse : 2015"
            },
            {
                "pk_standards": 9,
                "standard": "CLASS"
            },
            {
                "pk_standards": 10,
                "standard": "Entreprise Citoyenne 9001-14001-45001"
            },
            {
                "pk_standards": 11,
                "standard": "PRP Bientraitance 9001"
            },
            {
                "pk_standards": 11,
                "standard": "PRP Service à la personne 9001"
            }
        ];

        $scope.auditReports = [
            {
                "pk_auditReports": 1,
                "fk_standard": 1,
                "fk_interpretation": 1,
                "chapter": "chapitre 1",
                "description": "fdsaf fdsa",
                "noncomplianceDelayTreatment": "",
                "actionPlan": "",
                "actionPlanValidation": "",
                "APVVvalidated": false,
                "correctiveActionMade": "",
                "attachement": "",
                "correctiveActionValidation": "",
                "CAVValidated": false
            },
            {
                "pk_auditReports": 2,
                "fk_standard": 2,
                "fk_interpretation": 3,
                "chapter": "chapitre 2",
                "description": "salut asadfafdsf",
                "noncomplianceDelayTreatment": "",
                "actionPlan": "",
                "actionPlanValidation": "sdafsdf",
                "APVVvalidated": true,
                "correctiveActionMade": "",
                "attachement": "asdf.txt",
                "correctiveActionValidation": "",
                "CAVValidated": true
            }
        ];

        $scope.conclusionsReview = [
            {
                "pk_conclusionsReview": 1,
                "title": "Le système de management de projet intègre-t-il les exigences des référentiels audités ?",
                "yesno": true
            },
            {
                "pk_conclusionsReview": 2,
                "title": "Le système de management de projet est-il effectivement mis en place et entretenu ?",
                "yesno": false
            },
            {
                "pk_conclusionsReview": 3,
                "title": "L’organisme a-t-il mis en place des objectifs mesurables et cohérents avec sa politique",
                "yesno": false
            },
            {
                "pk_conclusionsReview": 4,
                "title": "Les évaluations internes participent-elles à l’amélioration effective du système de management ?",
                "yesno": false
            },
            {
                "pk_conclusionsReview": 5,
                "title": "La revue de projet permet-elle d’assurer que le système est efficace et conforme aux référentiels",
                "yesno": false
            },
            {
                "pk_conclusionsReview": 6,
                "title": "La formation et la sensibilisation des personnels sont-elles entretenues ?",
                "yesno": false
            },
            {
                "pk_conclusionsReview": 7,
                "title": "Des dispositions pour maîtriser la qualité des services sont-elles mises en oeuvre ?",
                "yesno": false
            },
            {
                "pk_conclusionsReview": 8,
                "title": "L’amélioration continue est-elle effective ?",
                "yesno": false
            }
        ];

        $scope.conclusionsComments = [
            {
                "pk_conclusionsComments": 1,
                "title": "Le client utilise le droit d'usage de la marque de certification",
                "yesno": false
            },
            {
                "pk_conclusionsComments": 2,
                "title": "L’organisme utilise la marque d’une façon qui paraît claire et sincère",
                "yesno": false
            },
            {
                "pk_conclusionsComments": 3,
                "title": "L’organisme respecte le règlement d'usage de la marque de certification",
                "yesno": false
            }
        ];

        $scope.conclusionsCompliance = [
            {
                "pk_conclusionsCompliance": 1,
                "title": "Certification initiale immédiate",
                "yesno": false
            },
            {
                "pk_conclusionsCompliance": 2,
                "title": "Maintien du certificat",
                "yesno": false
            },
            {
                "pk_conclusionsCompliance": 3,
                "title": "Renouvellement du certificat\n" +
                "Organisation d’un audit anticipé",
                "yesno": false
            },
            {
                "pk_conclusionsCompliance": 4,
                "title": "Audit documentaire par l’OC",
                "yesno": false
            }
        ];

        $scope.conclusionsNoncompliance = [
            {
                "pk_conclusionsNoncompliance": 1,
                "title": "Audit complémentaire",
                "yesno": false
            },
            {
                "pk_conclusionsNoncompliance": 2,
                "title": "Suspension du certificat",
                "yesno": false
            },
            {
                "pk_conclusionsNoncompliance": 3,
                "title": "Retrait du certificat",
                "yesno": false
            }
        ];

        $scope.conclusion = {
            "pk_conclusion": 1,
            "nextAuditExaminedElement": "asfasdfasf",
            "nextAuditFirstDaysDate": new Date()
        };

        $scope.documents = [
            {
                "pk_documents": 1,
                "name": "doc1.docx",
                "description": "asdfasf safdlakdsf sadf\nasfdaflsdf"
            },
            {
                "pk_documents": 2,
                "name": "doc2.txt",
                "description": "fasfsdaf\nsadf\nsapjsadf\nfffaaewrzrtuigf"
            },
            {
                "pk_documents": 3,
                "name": "doc3.pdf",
                "description": "asfdf"
            }

        ];

        $scope.certificationDecision = {
            "pk_certificationDecision": 1,
            "fk_status": 1,
            "author": "Stéphane Perrottet",
            "decisionDate": new Date()
        };

        $scope.status = [
            {
                "pk_status": 1,
                "name": "en cours"
            },
            {
                "pk_status": 2,
                "name": "fermé"
            }
        ];

        $scope.auditReportAttachements = [];
        $scope.documentsAttachements = [];

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
            angular.forEach($scope.tabs, function (tab, key) {
                if ($scope.active != key) {
                    tab.disabled = false;
                }
            });
        };

        $scope.updateAuditPlan = function () {
            $scope.modified = false;
            angular.forEach($scope.tabs, function (tab, key) {
                if ($scope.active != key) {
                    tab.disabled = false;
                }
            });
        };

        $scope.updateChecklists = function () {
            $scope.modified = false;
            angular.forEach($scope.tabs, function (tab, key) {
                if ($scope.active != key) {
                    tab.disabled = false;
                }
            });
        };

        $scope.updateGeneralFeelings = function () {
            $scope.modified = false;
            angular.forEach($scope.tabs, function (tab, key) {
                if ($scope.active != key) {
                    tab.disabled = false;
                }
            });
        };

        $scope.updateAuditTeamAndAuditedPeople = function () {
            $scope.modified = false;
            angular.forEach($scope.tabs, function (tab, key) {
                if ($scope.active != key) {
                    tab.disabled = false;
                }
            });
        };

        $scope.updateAuditReport = function () {
            $scope.modified = false;
            angular.forEach($scope.tabs, function (tab, key) {
                if ($scope.active != key) {
                    tab.disabled = false;
                }
            });
        };

        $scope.updateConclusion = function () {
            $scope.modified = false;
            angular.forEach($scope.tabs, function (tab, key) {
                if ($scope.active != key) {
                    tab.disabled = false;
                }
            });
        };

        $scope.updateDocuments = function () {
            $scope.modified = false;
            angular.forEach($scope.tabs, function (tab, key) {
                if ($scope.active != key) {
                    tab.disabled = false;
                }
            });
        };

        $scope.updateCertificationDecision = function () {
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
        };

        $scope.addPositivePointRow = function (index) {
            if (!Array.isArray($scope.generalFeelings[index].positivePoints)) {
                $scope.generalFeelings[index].positivePoints = [{
                    "pk_positivePoints": 0,
                    "content": ""
                }];
            } else {
                $scope.generalFeelings[index].positivePoints.push({
                    "pk_positivePoints": 0,
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
    }]);