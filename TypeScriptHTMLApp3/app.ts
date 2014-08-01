/// <reference path="Scripts/typings/angularjs/angular.d.ts" />

var MyApp = angular.module("MyApp", []);

interface ICustomScope extends ng.IScope {
    clock: {now:Date};
}

class MyController {
    constructor($scope:ICustomScope) {
        $scope.clock = {now : new Date()};

        var updateClock = function () {
            $scope.clock.now = new Date();
        };

        setInterval(function () {
            $scope.$apply(updateClock);
        }, 1000);

        updateClock();
    }
}

MyApp.controller("MyController", MyController);