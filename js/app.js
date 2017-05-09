/* globals angular*/
console.log('app.js was loaded.');
var calcApp = angular.module('Calculon', []);
calcApp.controller('Calculator', ['$scope', function($scope) {
    $scope.screen = '0';
    $scope.screenDisplay = '0';
    $scope.bankA = undefined;
    $scope.operator = undefined;
    var hasBeenEquated = false;
    var operatorPressed = false;
    $scope.pressNumber = function(num) {
        if ($scope.screen === '0') {
            $scope.screen = '';
            $scope.screenDisplay = '';
        }
        if (hasBeenEquated === true && operatorPressed === false) {
            $scope.screen = '';
            $scope.screenDisplay = '';
            hasBeenEquated = false;
        }
        $scope.screen += num;
        $scope.screenDisplay += num;
    };

    $scope.pressOperator = function(operator) {
        operatorPressed = true;
        if ($scope.bankA === undefined) {
            $scope.bankA = parseFloat($scope.screen);
            $scope.screen = '';
        } else {
            equals();
            $scope.bankA = parseFloat($scope.screen);
            $scope.screen = '';
        }
        $scope.operator = operator;
        $scope.screenDisplay += $scope.operator;

    };

    $scope.pressEqual = function() {
        equals();
        $scope.screenDisplay = $scope.screen;
        hasBeenEquated = true;
        clearInputs();
    };

    function equals() {
        var total;
        var screenVal = parseFloat($scope.screen);
        switch ($scope.operator) {
            case "+":
                total = $scope.bankA + screenVal;
                break;
            case "-":
                total = $scope.bankA - screenVal;
                break;
            case "/":
                total = $scope.bankA / screenVal;
                break;
            case "*":
                total = $scope.bankA * screenVal;
                break;
        }
        $scope.screen = total;
        console.log(total);
    };

    $scope.destroy = function() {
        clearInputs();
        $scope.screen = '0';
        $scope.screenDisplay = '0';
    };

    function clearInputs() {
        $scope.bankA = undefined;
        $scope.operator = undefined;
        operatorPressed = false;
    }

}]);
