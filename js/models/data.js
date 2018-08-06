var app = app || {};

app.dataModel = Backbone.Model.extend({

		defaults: {
			link: "https://www.google.co.in"
		},
		initialize: function() {
			console.log("hello world from initialize method");
			console.log(this.get("name"));

			this.on('change', function(){
				console.log("Something in our model has changed");
			});

			this.on('change', function(){
				console.log("The model name that changed is "+this.get('name'));
			});
		}
});
