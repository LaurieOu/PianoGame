var Dispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  addNote: function(key) {
    Dispatcher.dispatch({
      actionType: "ADD_NOTE",
      note: key
    });
  },
  removeNote: function(key) {
    Dispatcher.dispatch({
      actionType: "REMOVE_NOTE",
      note: key
    });
  }
};


module.exports = KeyActions;
