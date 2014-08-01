var MyApp = angular.module("MyApp", []);

var MyController = (function () {
    function MyController($scope) {
        $scope.clock = new Date();

        var updateClock = function () {
            $scope.clock = new Date();
        };

        setInterval(function () {
            $scope.$apply(updateClock);
        }, 1000);

        updateClock();
    }
    return MyController;
})();
/*
function MyController($scope) {
$scope.clock = new Date();
var updateClock = function () {
$scope.clock = new Date();
};
setInterval(function () {
$scope.$apply(updateClock);
}, 1000);
updateClock();
};*/
//# sourceMappingURL=app.js.map
