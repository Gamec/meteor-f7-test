if (Meteor.isClient) {
  Template.index.events({
    'click .about': function() {
      FlowRouter.go('/about');
    }
  });

  Template.about.events({
    'click .back': function() {
      FlowRouter.go('/');
    }
  });

  var myApp = new Framework7();

  // // If we need to use custom DOM library, let's save it to $$ variable:
  var $$ = Dom7;

  // This causes errors, dont know what to do here

  // var mainView = myApp.addView('.view-main', {
  //   // Because we want to use dynamic navbar, we need to enable it for this view:
  //   dynamicNavbar: true
  // });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
