Router.configure({
    layoutTemplate: 'layoutTpl'
});

Router.route('/',function () {
    this.render('index');
});

Router.route('/dashboard', function () {
    this.render('dashboard');
});