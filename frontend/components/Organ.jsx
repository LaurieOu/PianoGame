var React = require('react');
var Key = require('./Key');
var KeyListener = require('../util/KeyListener');
var Recorder = require('./Recorder');
var FightSong = require('./FightSong');


var keys = [
'A3','A3S','B3',
'C4','C4S','D4','D4S','E4','F4','F4S','G4','G4S','A4','A4S','B4',
'C5','C5S','D5','D5S','E5','F5','F5S','G5','G5S','A5','A5S','B5',
'C6', 'C6S', 'D6'];


var Organ = React.createClass({
  componentWillMount: function () {
    KeyListener.keyStart();
    KeyListener.keyEnd();
  },

  render: function() {
    var organKeys = this.keys();
    return (
      <div className="main-page">
        <label>Learn Piano and Typing!</label>
          <div className="falling-notes-container">
            <FightSong />
          </div>

          <div className="octave">
            {organKeys}
          </div>
      </div>
    );
  },
  keys: function() {
    return keys.map(function(key, idx) {
      return <Key key={idx} id={key} />;
    });
  }

});

module.exports = Organ;
