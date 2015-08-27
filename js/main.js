$(document).ready(function () {
	window.onpopstate = function(event) {
	  console.log('>>>>>>>>>>>>>>>>>>>> onpopstate', event);
	  $('#main-region').html(ListBack.listHtml);
	  //window.history.back();
	};
	var app = new Mn.Application({
		container: '#main',
		regions: {
			mainRegion: "#main-region"
		}
	});

	// Start history when our application is ready
	app.on('start', function () {
		ListBack.app = app;
		app.router = new ListBack.Router();
		
		Backbone.history.start({
			pushState: true,
			root:'/'
		});
	});
	
	app.start();
	

});