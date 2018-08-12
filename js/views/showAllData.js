var app = app || {};

app.showAllData = Backbone.View.extend({
  render: function () {
    this.collection.each(this.addLink, this);
    return this;
  },
  addLink: function (sl) {
    var singleLink = new app.showData ({ model: sl });
    this.$el.append(singleLink.render().el);
  }
});
