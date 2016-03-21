var React = require('react');
var keyStore = require('../stores/key_store');
var Tones = require('../constants/Tones');
var Note = require('../util/Note');

Mapping = {

 'A3': 'Z',
 'A3S': 'S',
 'B3': 'X',

 'C4': 'C',
 'C4S': 'F',
 'D4': 'V',
 'D4S': 'G',
 'E4': 'B',
 'F4': 'N',
 'F4S': 'J',
 'G4': 'M',
 'G4S': 'K',
 'A4': '<',
 'A4S': 'L',
 'B4': '>',
 'C5': '?',

 'C5': 'Q',
 'C5S': '2',
 'D5': 'W',
 'D5S': '3',
 'E5': 'E',
 'F5': 'R',
 'F5S': '5',
 'G5': 'T',
 'G5S': '6',
 'A5': 'Y',
 'A5S': '7',
 'B5': 'U',
 'C6': 'I',
 'C6S': '9',
 'D6': 'O'
};

var Key = React.createClass({
  getInitialState: function() {
    return {KeyStore: keyStore.all(), keyNote: undefined, playing: false};
  },
  _keysChanged: function () {
    this.setState({KeyStore: keyStore.all()});
  },
  componentDidMount: function() {
    this.state.keyNote = new Note(Tones[this.props.id]);
    keyStore.addListener(this._keysChanged);
  },
  playNote: function (id) {
    if (this.state.keyNote) {
      if (this.state.KeyStore.includes(id)) {
        this.state.keyNote.start();
        this.state.playing = true;
      } else {
        this.state.keyNote.stop();
        this.state.playing = false;
      }
    }
  },
  render: function() {
    var id = this.props.id;
    var letter = Mapping[id];
    var type = '';
    var notesLabel = "notes-label";

    this.playNote(id);

    if (id.includes('S')) {
      type += ' sharp';
      notesLabel += "-S"
    }
    if (this.state.playing) {
      type += ' playing';
    }

    return (
      <div >
        <h1 id={id} className={type}><span className={notesLabel}>{letter}</span></h1>
      </div>
    );
  }

});

module.exports = Key;
