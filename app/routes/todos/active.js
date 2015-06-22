import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.filter("todo", function(todo) {
      return !todo.get("isCompelted");
    });
  },
  renderTemplate: function(controller, model) {
    this.render("todos.index", {
      model: model
    });
  }
});



