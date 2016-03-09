var KeyActions = require('../actions/KeyActions');

var Mapping = {
  90: 'C4',
  83: 'C4S',
  88: 'D4',
  68: 'D4S',
  67: 'E4',
  86: 'F4',
  71: 'F4S',
  66: 'G4',
  72: 'G4S',
  78: 'A4',
  74: 'A4S',
  77: 'B4',
  188: 'C5',

  81: 'C5',
  50: 'C5S',
  87: 'D5',
  51: 'D5S',
  69: 'E5',
  82: 'F5',
  53: 'F5S',
  84: 'G5',
  54: 'G5S',
  89: 'A5',
  55: 'A5S',
  85: 'B5',
  73: 'C6'
};

var KeyListener = {
  keyStart: function () {
    $(document).on("keydown", function(e) {
      KeyActions.addNote(Mapping[e.keyCode]);
    });
  },

  keyEnd: function() {
    $(document).on("keyup", function(e) {
      KeyActions.removeNote(Mapping[e.keyCode]);
    });
  },
  mapping: function() {
    return Mapping;
  }
};

// var notes = [];
//
//
// var start = function(e) {
//   e.preventDefault();
//   var newNote = new Note(Tones(Mapping(e)));
//   newNote.start();
// };

module.exports = KeyListener;
