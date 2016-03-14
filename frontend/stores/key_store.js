var Dispatcher = require('../dispatcher/Dispatcher');
var Store = require('flux/utils').Store;

var KeyStore = new Store(Dispatcher);

var _keys = [];

KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "ADD_NOTE":
      addNote(payload.note);
      KeyStore.__emitChange();
      break;
    case "REMOVE_NOTE":
      removeNote(payload.note);
      KeyStore.__emitChange();
      break;
    case "UPDATE_NOTES":
      updateNotes(payload.notes);
      KeyStore.__emitChange();
  }
  //
  // console.log(payload);
};

function updateNotes(notes) {
  _keys = notes.slice();
}

function addNote(note) {
  if (note && _keys.indexOf(note) === -1) {
    _keys.push(note);
  }
}

function removeNote(note) {
  if (note) {
    var idx = _keys.indexOf(note);
    _keys.splice(idx, 1);
  }
}

module.exports = KeyStore;
