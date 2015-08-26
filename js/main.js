$(document).ready(function () {
	var app = new Mn.Application({
		container: '#main',
		regions: {
			mainRegion: "#main-region"
		}
	});

	// Start history when our application is ready
	app.on('start', function() {
		app.router = new ListBack.Router();
		app.router.app = app;
		
		Backbone.history.start({
			pushState: true,
			root:''
		});
	});
	
	app.start();
	

});