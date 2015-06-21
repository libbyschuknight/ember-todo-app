import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  },
  actions: {
    createTodo: function(newTitle) {
      //create the new todo model
      var todo = this.store.createRecord('todo', {
        title: newTitle,
        isCompleted: false
      });

      //clear the "new todo" text field
      this.controllerFor("todos").set("newTitle");

      //save the new model
      todo.save();
    }
  }
});
