

var q = angular.module("Employee", []);
q.controller("Empdata", function ($scope) {
    $scope.msg = "hey there";
    $scope.emp=[
        { Name: "harsh", ID: 53, City: "LKO" },
        { Name: "naman", ID: 54, City: "SRE" },
        { Name: "sid", ID: 10, City: "KNP" },
        { Name: "ayush", ID: 50, City: "LKO" },
        { Name: "manoj", ID: 41, City: "GRP" }
    ]
})