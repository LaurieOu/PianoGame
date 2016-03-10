var KeyActions = require('../actions/KeyActions');

var Mapping = {
  90: 'A3',
  83: 'A3S',
  88: 'B3',

  67: 'C4',
  70: 'C4S',
  86: 'D4',
  71: 'D4S',
  66: 'E4',
  78: 'F4',
  74: 'F4S',
  77: 'G4',
  75: 'G4S',
  188: 'A4',
  76: 'A4S',
  190: 'B4',
  191: 'C5',

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
  73: 'C6',
  57: 'C6S',
  79: 'D6'
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
