//attrHash = {name, roll: recipe}
// var keyStore = require('../stores/key_store');
var KeyActions = require('../actions/KeyActions');

var Track = function (attrHash) {
  this.name = "";
  this.roll = [];

  if (attrHash !== undefined) {
    this.name = attrHash.name;
    this.roll = attrHash.roll;
  }
}

Track.prototype = {
  startRecording: function() {
    this.roll = [];
    this.start = Date.now();
  },
  addNotes: function(notes) {
    var timeDiff = Date.now() - this.start;
    this.roll.push({"timeDiff": timeDiff, "notes": notes});
  },
  stopRecording: function() {
    this.addNotes([]);
  },
  isBlank: function() {
    return this.roll.length === 0;
  },
  play: function() {
    if (this.interval) {return;}

    var playbackStartTime = Date.now();
    var currentNote = 0;

    this.interval = setInterval(function() {
      if (currentNote < this.roll.length) {
        if (Date.now() - playbackStartTime >= this.roll[currentNote].timeDiff) {
          var notes = this.roll[currentNote].notes || [] ;
          KeyActions.updateNotes(notes);
          currentNote++;
        }
      } else {
        clearInterval(this.interval);
        delete this.interval
      }
    }.bind(this), 1);
  }
};

module.exports = Track;
