// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('simplyHome', ['ionic', 'simplyHome.controllers', 'simplyHome.services',  'ng-token-auth', 'ipCookie', 'ngFileUpload', 'angularMoment', 'cgNotify', 'ion-datetime-picker', 'ionic.rating'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $authProvider.configure([{
    renter: {
      apiUrl: 'http://localhost:3000',
      tokenValidationPath: '/renter/validate_token',
      signOutUrl: '/renter/sign_out',
      emailRegistrationPath: '/renter',
      accountUpdatePath: '/renter',
      accountDeletePath: '/renter',
      passwordResetPath: '/renter/password',
      passwordUpdatePath: '/renter/password',
      emailSignInPath: '/renter/sign_in',
      // storage: 'localStorage',
      validateOnPageLoad: true
    }
  }, {
    agent: {
      apiUrl: 'http://localhost:3000',
      tokenValidationPath: '/agent/validate_token',
      signOutUrl: '/agent/sign_out',
      emailRegistrationPath: '/agent',
      accountUpdatePath: '/agent',
      accountDeletePath: '/agent',
      passwordResetPath: '/agent/password',
      passwordUpdatePath: '/agent/password',
      emailSignInPath: '/agent/sign_in',
      // storage: 'localStorage',
      validateOnPageLoad: true
    }
  }]);

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  //////////////////////////////////////////////////////////
  //====================== Renter ========================//
  //////////////////////////////////////////////////////////
  .state('tab.renter-auth', {
    url: '/renter-auth',
    abstract: true,
    views: {
      'tab-renter-signup': {
        templateUrl: 'templates/tabs-renter/abstract.html',
        controller: 'RenterAuthCtrl'
      }
    }
  })
  .state('tab.renter-auth.signup', {
    url: '/signup',
    templateUrl: 'templates/tabs-renter/tab-signup.html',
  })
  .state('tab.renter-auth.login', {
    url: '/login',
    templateUrl: 'templates/tabs-renter/login.html',
  })

  .state('tab.renter-enquiry', {
    url: '/renter-enquiry',
    abstract: true,
    views: {
      'tab-renter-enquiry': {
        templateUrl: 'templates/tabs-renter/enquiry.html',
        controller: 'EnquiryCtrl'
      }
    }
  })

  .state('tab.renter-enquiry.location', {
    url: '/location',
    templateUrl: 'templates/tabs-renter/tab-enquiry.html'
  })

  .state('tab.renter-enquiry.criteria', {
    url: '/criteria',
    templateUrl: 'templates/tabs-renter/tab-enquiry-criteria.html'
  })

  .state('tab.renter-chats', {
    url: '/renter-chats',
    views: {
      'tab-renter-chat': {
        templateUrl: 'templates/tabs-renter/tab-chats.html',
        controller: 'RenterChatsCtrl'
      }
    }
  })


  .state('tab.renter-my-enquiries', {
    url: '/renter-myenquiries',
    views: {
      'tab-renter-my-enquiries': {
        templateUrl: 'templates/tabs-renter/tab-my-enquiries.html',
        controller: 'RenterMyEnquiriesCtrl'
      }
    }
  })

  .state('tab.renter-appointments', {
    url: '/renter-appointments',
    views: {
      'tab-renter-appointments': {
        templateUrl: 'templates/tabs-renter/tab-appointments.html',
        controller: 'RenterAppointmentsCtrl'
      }
    }
  })

    .state('tab.renter-account', {
    url: '/renter-account',
    views: {
      'tab-renter-account': {
        templateUrl: 'templates/tabs-renter/tab-account.html',
      }
    }
  })

  .state('tab.renter-ratings', {
    url: '/renter-ratings',
    views: {
      'tab-renter-ratings': {
        templateUrl: 'templates/tabs-renter/tab-ratings.html',
        controller: 'RenterRatingsCtrl'
      }
    }
  })

  //============ Renter states ==========================================

  // .state('tab.renter-chat-detail-listings', {
  //   url: '/renter-chats/:chatId/listings',
  //   views: {
  //     'tab-renter-chat': {
  //       templateUrl: 'templates/tabs-renter/chat-listings.html',
  //       controller: 'RenterChatListingsCtrl'
  //     }
  //   }
  // })

  // .state('tab.renter-my-appointments', {
  //   url: '/renter-my-appointments',
  //   views: {
  //     'tab-renter-my-appointments': {
  //       templateUrl: 'templates/tabs-renter/tab-my-appointments.html',
  //       controller: 'RenterAppointmentsCtrl'
  //     }
  //   }
  // })

  // // renter-review
  // .state('tab.renter-review', {
  //   url: '/renter-my-appointments/:appointmentId/renter-review',
  //   views: {
  //     'review-to-agent': {
  //       templateUrl: 'templates/tabs-renter/review-to-agent.html'
  //     }
  //   }
  // })

  .state('tab.testrenter', {
    url: '/testrenter',
    views: {
      'tab-testRenter': {
        templateUrl: 'templates/test/test-renter-signup.html',
        controller: 'RenterAuthCtrl'
      }
    }
  })

  .state('tab.testrenterLogin', {
    url: '/renterLogin',
    views: {
      'tab-testRenterLogin': {
        templateUrl: 'templates/test/test-renter-login.html',
        controller: 'RenterAuthCtrl'
      }
    }
  })

  //////////////////////////////////////////////////////////
  //====================== Agent =========================//
  //////////////////////////////////////////////////////////

  .state('tab.agent-newlisting', {
    url: '/newlisting',
    views: {
      'tab-newlisting': {
        templateUrl: 'templates/tabs-agent/tab-new.html',
        controller: 'NewCtrl'
      }
    }
  })
  .state('tab.agent-enquiries', {
    url: '/enquiries',
    views: {
      'tab-enquiries': {
        templateUrl: 'templates/tabs-agent/tab-enquiries.html',
        controller: 'AgentEnquiriesCtrl'
      }
    }
  })

  .state('tab.agent-enquiry', {
    url: '/enquiry',
    views: {
      'tab-enquiries': {
        templateUrl: 'templates/tabs-agent/tab-enquiry.html',
        controller: 'AgentEnquiryCtrl'
      }
    }
  })

  .state('tab.agent-appointments', {
    url: '/appointments',
    views: {
      'tab-appointments': {
        templateUrl: 'templates/tabs-agent/tab-appointments.html',
        controller: 'AgentAppointmentsCtrl'
      }
    }
  })

  .state('tab.agent-chats', {
      url: '/chats',
      views: {
        'tab-agent-chats': {
          templateUrl: 'templates/tabs-agent/tab-chats.html',
          controller: 'AgentChatsCtrl'
        }
      }
    })

  .state('tab.agent-chat', {
    url: '/chat',
    views: {
      'tab-agent-chats': {
        templateUrl: 'templates/tabs-agent/tab-chat.html',
        controller: 'AgentChatCtrl'
      }
    }
  })

  .state('tab.agent-ratings', {
    url: '/ratings',
    views: {
      'tab-agent-ratings': {
        templateUrl: 'templates/tabs-agent/tab-ratings.html',
        controller: 'AgentRatingsCtrl'
      }
    }
  })

  .state('tab.testagent', {
    url: '/testagent',
    views: {
      'tab-testAgent': {
        templateUrl: 'templates/test/test-agent-signup.html',
        controller: 'AgentAuthCtrl'
      }
    }
  })

  .state('tab.testagentLogin', {
    url: '/agentLogin',
    views: {
      'tab-testAgentLogin': {
        templateUrl: 'templates/test/test-agent-login.html',
        controller: 'AgentAuthCtrl'
      }
    }
  })

  .state('tab.agent-account', {
    url: '/account',
    views: {
      'tab-agent-account': {
        templateUrl: 'templates/tabs-agent/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  // .state('tab-a.agent-chat-detail', {
  //   url: '/chats/:chatId',
  //   views: {
  //     'tab-agent-chats': {
  //       templateUrl: 'templates/chat-detail.html',
  //       controller: 'ChatDetailCtrl'
  //     }
  //   }
  // })

  //
  // .state('tab.agent-listings', {
  //   url: '/listings',
  //   views: {
  //     'tab-listings': {
  //       templateUrl: 'templates/tabs-agent/tab-listings.html',
  //       controller: 'ListingsCtrl'
  //     }
  //   }
  // })

  // .state('tab.agent-my-appointments', {
  //   url: '/agent-my-appointments',
  //   views: {
  //     'tab-agent-my-appointments': {
  //       templateUrl: 'templates/tabs-agent/tab-my-appointments.html',
  //       controller: 'AgentAppointmentsCtrl'
  //     }
  //   }
  // })

  // // agent-review state
  // .state('tab.agent-review', {
  //   url: '/agent-my-appointments/:appointmentId/agent-review',
  //   views: {
  //     'review-to-agent': {
  //       templateUrl: 'templates/tabs-agent/review-to-renter.html'
  //     }
  //   }
  // })

  // if none of the above states are matched, use this as the fallback

  // $urlRouterProvider.otherwise('/renter/enquiry/location');
 $urlRouterProvider.otherwise('/tab/renter-enquiry/location');
})