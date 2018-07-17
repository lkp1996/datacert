'use strict';

angular.module('myApp.checklists', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/checklists', {
            templateUrl: 'checklists/checklists.html',
            controller: 'ChecklistsCtrl'
        });
    }])

    .controller('ChecklistsCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {
        $scope.checklists = [
            {
                "pk_checklist": 1,
                "name": "checklist1",
                "points": [
                    {
                        "pk_point": 1,
                        "point": "point 1"
                    },
                    {
                        "pk_point": 2,
                        "point": "point 2"
                    },
                    {
                        "pk_point": 3,
                        "point": "point 3"
                    },
                    {
                        "pk_checklist": 4,
                        "point": "point 4"
                    }
                ]
            },
            {
                "pk_checklist": 2,
                "name": "checklist2",
                "points": [
                    {
                        "pk_point": 1,
                        "point": "point 1"
                    },
                    {
                        "pk_point": 2,
                        "point": "point 2"
                    }
                ]
            }, {
                "pk_checklist": 3,
                "name": "checklist3",
                "points": [
                    {
                        "pk_point": 1,
                        "point": "point 1"
                    },
                    {
                        "pk_point": 2,
                        "point": "point 2"
                    },
                    {
                        "pk_point": 3,
                        "point": "point 3"
                    }
                ]
            },
        ];

        $scope.modified = false;

        $scope.modif = function () {
            $scope.modified = true;
        };

        $scope.cancel = function () {
            $scope.modified = false;
        };

        $scope.addCheck = function (checklist) {
            if (!Array.isArray(checklist)) {
                checklist = [
                    {"pk_checklist": 0, "point": ""}
                ];
            } else {
                checklist.push({"pk_checklist": 0, "point": ""});
            }
        };

        $scope.delRow = function (checklist, index) {
            if (confirm("Voulez-vous vraiment supprimer cet élément ?")) {
                checklist.splice(index, 1);
            }
        };

        $scope.updateChecklist = function () {
            $scope.modified = false;
        };

        $scope.addChecklist = function () {
            if (!Array.isArray($scope.checklists)) {
                $scope.checklists = [{
                    "pk_checklist": 0,
                    "name": "",
                    "points": []
                }];
            } else {
                $scope.checklists.push({
                    "pk_checklist": 0,
                    "name": "",
                    "points": []
                });
            }
        };

        $scope.delChecklist = function (index) {
            console.log($scope.checklists[index].name);
            if (confirm("Voulez-vous vraiment supprimer cette checklist ?")) {
                $scope.checklists.splice(index, 1);
            }
        };

    }]);