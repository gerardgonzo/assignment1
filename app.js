(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope', '$filter']
function LunchCheckController ($scope, $filter) {
  $scope.listItemsForLunch = "";
  $scope.result = "";

  $scope.checkLunchList = function () {
    var listOfItems = $scope.listItemsForLunch.split(',');
    listOfItems = listOfItems.map(s => s.trim());
    listOfItems = listOfItems.filter(Boolean); //remove empty items

    if (listOfItems.length == 0)
      $scope.result = "Please enter data first";
    else if (listOfItems.length <= 3)
      $scope.result = "Enjoy!";
    else
      $scope.result = "Too much!";
  };
}

})();
