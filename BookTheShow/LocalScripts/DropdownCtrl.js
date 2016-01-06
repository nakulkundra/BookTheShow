angular.module('BookTheShow', ['ui.bootstrap']);
angular.module('BookTheShow').controller('DropdownCtrl', function ($scope, $log) {
    $scope.items = [
      'Events',
      'Movies',
      'Plays'
    ];

    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(100);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(100);
    });


    $scope.clickEvent = function(choice) {
        console.log(choice);
    }
    
});

////angular.module('BookTheShow').directive('xuHello', function () {
////    return {
////        link: function (scope) {
////            scope.clickEvent = function () {
////                console.log('Function Hacked');
////            };
////        }
////    };
////});