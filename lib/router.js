FlowRouter.route('/', {
  action: function(params, queryParams) {
    console.log("Yeah! We are on the post:", params.postId);
    BlazeLayout.render('layout', { main: 'index' });

  }
});

FlowRouter.route('/about', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', { main: 'about' });
  }
});