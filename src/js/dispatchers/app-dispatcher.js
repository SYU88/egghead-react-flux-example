//dispatcher listens for changes on an action and then tells store/view to update
var Dispatcher = require('flux').Dispatcher;
//works similarly to extend in underscore
var assign = require('react/lib/Object.assign');

//extending app dispatcher to handle actions on the view
var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action){
    console.log('action', action);
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
});

module.exports = AppDispatcher;
