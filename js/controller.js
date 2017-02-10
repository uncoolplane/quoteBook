angular.module('quoteBook').controller('mainCtrl', function($scope, mainService){

    $scope.thisAppIsBroken = "This angular app is working";
    $scope.getQuotes = function() {
      $scope.quotes = mainService.getQuotes();
    }

    $scope.data = {
      text: '',
      author: ''
    };

    $scope.getQuotes();
    $scope.addQuote = function() {
      var newQuote = {
        text: $scope.data.text,
        author: $scope.data.author
      };

      mainService.addData(newQuote);
      $scope.data.text = '';
      $scope.data.author = '';
    }

    $scope.removeQuote = function(text) {
      mainService.removeData(text);
    }
})
