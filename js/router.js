(function () {
	
	var listRendered = false;
	var col = new ListBack.Collection();
    for (var i = 0; i < 100; i++) {
        col.add(new ListBack.Model({id:i, name:"test-" +i}));	
    }
    
    ListBack.collection = col;
    
	ListBack.Router = Backbone.Router.extend({

	  routes: {
	  	"":           "list",
	  	"!/":         "list",
	  	"/":          "list",
	    "list":       "list",
	    "item/:id":   "item",
	    "/item/:id":  "item",
	    "!/item/:id": "item",
	    
	  },
	
	  list: function () {
	  	  if (ListBack.listHtml) {
	  	  	$('#main-region').html(ListBack.listHtml);
	  	  	return;
	  	  }
	  	  
	  	  ListBack.app.getRegion('mainRegion').show(new ListBack.CollectionView({
	  	  	  collection: col
	  	  }));
	  },
	
	  item: function (id) {
	  	console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> item');
	  	ListBack.app.getRegion('mainRegion').show(new ListBack.MyItemView({
		  model: col.get(id)
		}));
	  }
	});
})();