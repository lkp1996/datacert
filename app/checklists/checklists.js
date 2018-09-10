'use strict';

angular.module('myApp.checklists', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/checklists', {
            templateUrl: 'checklists/checklists.html',
            controller: 'ChecklistsCtrl'
        });
    }])

    .controller('ChecklistsCtrl', ['$scope', '$rootScope', '$location', '$http', 'Constant', function ($scope, $rootScope, $location, $http, Constant) {
        $scope.checklists = [];

        $scope.modified = false;

        $scope.getChecklists = function () {
            console.log("hello");
            $http.get(Constant.url + "?checklists_names").then(
                function (data) {
                    console.log(data.data);
                    $scope.checklists = data.data;
                    angular.forEach($scope.checklists, function (checklist, key) {
                        $http.get(Constant.url + "?checklist_questions_all=" + checklist.pk_checklist).then(
                            function (data) {
                                checklist.questions = data.data;
                                angular.forEach(checklist.questions, function (question, key) {
                                    question.point = question.point - 0;
                                });
                            }
                        );
                    });
                }
            );
        };

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

        $scope.getChecklists();

    }]);