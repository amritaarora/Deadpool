/**
 * Created by kumars on 3/11/2016.
 */
var sampleApp = angular.module('sampleApp', []);
sampleApp.controller("GenerateReportController", function($scope, $http) {
    $http.get("WebDetails.json").then(function (response) {
        $scope.myWelcome = response.data;
    });
    $scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.myWelcome, function (item) {
            item.Selected = $scope.selectedAll;
        });

    };

    $scope.showMe = false;
    $scope.clickFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
});