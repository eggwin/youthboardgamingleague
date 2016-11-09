FlowRouter.route('/', {
	name: 'Main',
	action() {
		BlazeLayout.render('AppLayout', {
			content: 'main'
		});
	}
});

FlowRouter.route('/:page', {
	name: 'Main.content',
	action(params, queryParams) {
		BlazeLayout.render('AppLayout', {
			content: params.page
		});
	}
});