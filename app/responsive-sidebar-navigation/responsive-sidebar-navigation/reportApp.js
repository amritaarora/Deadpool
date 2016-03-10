/**
 * Created by kumars on 3/10/2016.
 */
var app = angular.module("viewApp", []);
app.controller("jsonCtrl", function($scope, $http) {
    $http.get("Emails.json").then(function(response) {
        $scope.myWelcome = response.data;
    });

    $scope.checkAll = function () {
        angular.forEach($scope.myWelcome, function (item) {
            item.Selected = $scope.selectedAll;
        });

    };
});
