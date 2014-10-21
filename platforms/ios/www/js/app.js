// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.all', {
      url: "/all",
      views: {
        'menuContent' :{
          templateUrl: "templates/all.html"
        }
      }
    })

    .state('app.refuge', {
      url: "/refuge",
      views: {
        'menuContent' :{
          templateUrl: "templates/refuge.html"
        }
      }
    })

    .state('app.bodhicitta', {
      url: "/bodhicitta",
      views: {
        'menuContent' :{
          templateUrl: "templates/bodhicitta.html"
        }
      }
    })

    .state('app.shakyamuni', {
      url: "/shakyamuni",
      views: {
        'menuContent' :{
          templateUrl: "templates/shakyamuni.html"
        }
      }
    })

    .state('app.guru', {
      url: "/guru",
      views: {
        'menuContent' :{
          templateUrl: "templates/guru.html"
        }
      }
    })

    .state('app.tara', {
      url: "/tara",
      views: {
        'menuContent' :{
          templateUrl: "templates/tara.html"
        }
      }
    })

    .state('app.dedication', {
      url: "/dedication",
      views: {
        'menuContent' :{
          templateUrl: "templates/dedication.html"
        }
      }
    })

    .state('app.buddha_mantra', {
      url: "/buddha_mantra",
      views: {
        'menuContent' :{
          templateUrl: "templates/buddha_mantra.html"
        }
      }
    })

    .state('app.ava_mantra', {
      url: "/ava_mantra",
      views: {
        'menuContent' :{
          templateUrl: "templates/ava_mantra.html"
        }
      }
    })

    .state('app.guru_mantra', {
      url: "/guru_mantra",
      views: {
        'menuContent' :{
          templateUrl: "templates/guru_mantra.html"
        }
      }
    })

    .state('app.tara_mantra', {
      url: "/tara_mantra",
      views: {
        'menuContent' :{
          templateUrl: "templates/tara_mantra.html"
        }
      }
    })

    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html"
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/all');
});

