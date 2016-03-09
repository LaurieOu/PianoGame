var React = require('react');
var keyStore = require('../stores/key_store');
var Tones = require('../constants/Tones');
var Note = require('../util/Note');

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
    var type = '';

    this.playNote(id);

    if (id.includes('S')) {
      type += ' sharp';
    }
    if (this.state.playing) {
      type += ' playing';
    }

    return (
      <div >
        <h1 id={id} className={type}> </h1>
      </div>
    );
  }

});

module.exports = Key;
