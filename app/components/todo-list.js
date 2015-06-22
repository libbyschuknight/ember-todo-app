import Ember from 'ember';

export default Ember.Component.extend( {
  actions: {
    createTodo: function(newTitle) {
      this.set("newTitle", "");
      this.sendAction("createTodo", newTitle);
    },
    remaining: Ember.computed("model.@each.isCompleted", function(){
      var model = this.get("model");
      return model.filterBy("isCompleted", false).get("length");
    }),
    inflection: Ember.computed("remaining", function() {
      var remaining = this.get("remaining");
      return (remaining === 1) ? "item" : "items";
    }),
    clearCompleted: function() {
      var completed = this.get('model').filterBy('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    },
  },
  hasCompleted: Ember.computed('completed', function() {
    return this.get('completed') > 0;
  }),
  completed: Ember.computed('model.@each.isCompleted', function() {
    var model = this.get('model');
    return model.filterBy('isCompleted', true).get('length');
  }),
});
