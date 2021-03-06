// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var altiApp = angular.module('AltiCRBook', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'loginCtrl',
    params: { param: null }
  })

   .state('details', {
    url: "/details",
    templateUrl: "templates/details.html",
    controller: 'detailsCtrl',
    params: { param: null }
  })
    .state('bookingForm', {
    url: "/bookingForm",
    templateUrl: "templates/bookingForm.html",
    controller: 'bookingFormCtrl',
    params: { param: null }
  })
    .state('details.selectLocation', {
    url: "/selectLocation",
    templateUrl: "templates/selectLocation.html",
    controller: 'selectLocationCtrl',
    params: { param: null }
  })
   .state('booking', {
     cache: false,
    url: "/booking",
    templateUrl: "templates/booking.html",
    controller: 'bookingCtrl',
    params: { param: null }
  })

    .state('details.pendingRequest', {
    url: "/pendingRequest",
    templateUrl: "templates/pendingRequest.html",
    controller: 'pendingRequestCtrl'
  })

    .state('details.bookingHistory', {
    url: "/bookingHistory",
    templateUrl: "templates/bookingHistory.html",
    controller: 'bookingHistoryCtrl'
  })
   
     .state('hallDetails', {
    url: "/hallDetails",
    templateUrl: "templates/hallDetails.html",
    controller: 'hallDetailsCtrl'
  })
   
  $urlRouterProvider.otherwise('/login');
});

