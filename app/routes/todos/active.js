import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.filter("todo", function(todo) {
      return !todo.get("isCompelted");

      // if (todo.get("isCompelted") == false){
      //   return todo.get("isCompelted");

      //   // return items that DO NOT have the class completed on them
      //   // this is trying to do this by gettting NOT isCompleted ones, so ones that DON'T have class="completed"
      // }
      // return todo.get("remaining");

    });
  },
  renderTemplate: function(controller, model) {
    this.render("todos.index", {
      model: model
    });
  }
});



