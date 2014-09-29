var blogApp = angular.module('blogApp', [
  'ngRoute',
  'homeControllers'
   ]);

blogApp.config(function($routeProvider) {
    $routeProvider.
      when('/home', {
         templateUrl: 'partials/home.html',
         controller: 'homeControllers'
      }).
      when('/about', {
        templateUrl: 'partials/about.html'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  });

