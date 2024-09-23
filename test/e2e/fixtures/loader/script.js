'use strict';

angular.
  module('test', [
    'ngTouch',
    'ngSanitize',
    'ngRoute',
    'ngParseExt',
    'ngMessages',
    'ngMessageFormat',
    'ngCookies',
    'ngAria',
    'ngAnimate'
  ]).
  controller('TestController', function($scope) {
    $scope.text = 'Hello, world!';
  });
