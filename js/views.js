(function () {
	var tpl = '<span id="item-<%= id %>"><a href="#!/item/<%= id %>"><%= name %></a></span>';
	ListBack.ItemView = Marionette.ItemView.extend({
		tagName: 'li',
		
		events: {
			'click a': 'navigateToItem'
		},
		
		navigateToItem: function () {
			return false;
		},
		
		template : function (data) {
		    return _.template(tpl)({
		        name : data.name,
		        id: data.id
		    });
		},
	}); 
	
	ListBack.CollectionView = Marionette.CollectionView.extend({
		tagName: 'ul',
	  	childView: ListBack.ItemView
	});
	
	ListBack.MyItemView = Marionette.ItemView.extend({
		tagName: 'li',
		class: "my-item",
		template : function (data) {
		    return _.template(tpl)({
		        name : data.name,
		        id: data.id
		    });
		},
	});   
})(); 