angular.module('app.routes', ['ionicUIRouter'])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      .state('tabsController.home', {
        url: '/page2',
        views: {
          'tab1': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
      })

      .state('tabsController.department', {
        url: '/page3',
        views: {
          'tab2': {
            templateUrl: 'templates/department.html',
            controller: 'departmentCtrl'
          }
        }
      })
      .state('tabsController.profile', {
        url: '/page10',
        views: {
          'tab4': {
            templateUrl: 'templates/profile.html',
            controller: 'profileCtrl'
          }
        }
      })
      .state('tabsController.eventLocation', {
        url: '/page4',
        views: {
          'tab3': {
            templateUrl: 'templates/eventLocation.html',
            controller: 'eventLocationCtrl'
          }
        }
      })
      .state('tabsController.loginOut', {
        url: '/page5',
        views: {
          'tab4': {
            templateUrl: 'templates/loginOut.html',
            controller: 'loginOutCtrl'
          }
        }
      })

      .state('tabsController', {
        url: '/page1',
        templateUrl: 'templates/tabsController.html',
        abstract: true
      })

      .state('tabsController.event', {
        url: '/Event/:organizer',
        views: {
          'tab2': {
            templateUrl: 'templates/event.html',
            controller: 'eventCtrl'
          }
        }
      })

      /* 
        The IonicUIRouter.js UI-Router Modification is being used for this route.
        To navigate to this route, do NOT use a URL. Instead use one of the following:
          1) Using the ui-sref HTML attribute:
            ui-sref='tabsController.eventDetail'
          2) Using $state.go programatically:
            $state.go('tabsController.eventDetail');
        This allows your app to figure out which Tab to open this page in on the fly.
        If you're setting a Tabs default page or modifying the .otherwise for your app and
        must use a URL, use one of the following:
          /page1/tab2/EventDetail
          /page1/tab3/EventDetail
      */
      .state('tabsController.eventDetail', {
        url: '/EventDetail/:id',
        views: {
          'tab1': {
            templateUrl: 'templates/eventDetail.html',
            controller: 'eventDetailCtrl'
          },
          'tab2': {
            templateUrl: 'templates/eventDetail.html',
            controller: 'eventDetailCtrl'
          },
          'tab3': {
            templateUrl: 'templates/eventDetail.html',
            controller: 'eventDetailCtrl'
          },
          'tab4': {
            templateUrl: 'templates/eventDetail.html',
            controller: 'eventDetailCtrl'
          }
        }
      })

      /* 
        The IonicUIRouter.js UI-Router Modification is being used for this route.
        To navigate to this route, do NOT use a URL. Instead use one of the following:
          1) Using the ui-sref HTML attribute:
            ui-sref='tabsController.location'
          2) Using $state.go programatically:
            $state.go('tabsController.location');
        This allows your app to figure out which Tab to open this page in on the fly.
        If you're setting a Tabs default page or modifying the .otherwise for your app and
        must use a URL, use one of the following:
          /page1/tab2/location
          /page1/tab3/location
      */
      .state('tabsController.location', {
        url: '/location/:VenueID',
        views: {
          'tab1': {
            templateUrl: 'templates/location.html',
            controller: 'locationCtrl'
          },
          'tab2': {
            templateUrl: 'templates/location.html',
            controller: 'locationCtrl'
          },
          'tab3': {
            templateUrl: 'templates/location.html',
            controller: 'locationCtrl'
          },
          'tab4': {
            templateUrl: 'templates/location.html',
            controller: 'locationCtrl'
          },
        }
      })

      .state('tabsController.event2', {
        url: '/page9/:VenueID',
        views: {
          'tab3': {
            templateUrl: 'templates/event2.html',
            controller: 'event2Ctrl'
          }
        }
      })
      .state('tabsController.registration', {
        url: '/page11/',
        views: {
          'tab4': {
            templateUrl: 'templates/registration.html',
            controller: 'registrationCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/page1/page2')


  });

