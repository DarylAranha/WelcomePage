var app = app || {};

app.showData = Backbone.View.extend({
  tagName: "anchorTag",
  template: _.template($("#links").html()),
  render: function () {
    var linksTemplate = this.template(this.model.toJSON());
    this.$el.html(linksTemplate);
    return this;
  }
});
