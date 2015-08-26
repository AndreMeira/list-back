(function () {
	
	var listRendered = false;
	var col = new ListBack.Collection();
    for (var i = 0; i < 100; i++) {
        col.add(new ListBack.Model({id:i, name:"test-" +i}));	
    }
    
	ListBack.Router = Backbone.Router.extend({

	  routes: {
	  	"":           "list",
	  	"!/":         "list",
	  	"/":          "list",
	    "list":       "list",
	    "item/:id":   "item",
	    "!/item/:id": "item",
	  },
	
	  list: function () {
	  	  if (listRendered) {
	  	  	window.history.back();
	  	  	return;
	  	  }
	  	  listRendered = true;
	  	  ListBack.app.getRegion('mainRegion').show(new ListBack.CollectionView({
	  	  	  collection: col
	  	  }));
	  },
	
	  item: function (id) {
	  	ListBack.getRegion('mainRegion').show(new ListBack.MyItemView({
		  model: col.get(id)
		}));
	  }
	});
})();