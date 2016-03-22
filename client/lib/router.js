Router.configure({
  // default layout
  layoutTemplate: 'layout'
});

Router.route('/', {
    template: 'about'
});

Router.route('/about', {
    template: 'about'
});

Router.route('/contact', {
    template: 'contact'
});

Router.route('/education', {
    template: 'education'
});
