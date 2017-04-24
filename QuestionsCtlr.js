var app = angular.module('SurveyApp', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'Survey.html'
    })
    .when('/ThankYou', {
        templateUrl: 'ThankYou.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('QACtlr', function ($scope, $http, $location) {
   
    $http.get('/Database.json')
    .success(function (response) {
        $scope.Questions = response.records;
    })
    .then(function (response) {
    });
    
    $scope.submit = function () {
        $location.path('/ThankYou');
    };
});
