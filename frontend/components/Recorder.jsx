var React = require('react');
var KeyStore = require('../stores/key_store');
var Track = require('../util/Track');


var Recorder = React.createClass({
  getInitialState: function() {
    return {isRecording: false, track: new Track()};
  },
  keysChanged: function() {
    if (this.state.isRecording) {
      this.state.track.addNotes(KeyStore.all())
    }
  },
  componentDidMount: function() {
    KeyStore.addListener(this.keysChanged);
  },
  RecordClick: function() {
    var track = this.state.track;
    if (this.state.isRecording === false) {
      this.setState({isRecording: true});
      track.startRecording();
    } else {
      track.stopRecording();
      this.setState({isRecording: false});

    }
  },
  playClick: function() {
    if (!this.state.track.isBlank()) {
      this.state.track.play();
    }
  },
  messages: function() {
    if (this.state.isRecording) {
      return "Stop Recording"
    }
    // else if (!this.state.isRecording && this.state.track.isBlank()) {
    //   return "Done"
    // }
    else {
      return "Start Recording"
    }
  },
  render: function() {
    return (
      <div className="recorder-container">
        <label className="recorder-font">Recorder</label><br/>
        <button onClick={this.RecordClick} className="recorder-button">{this.messages()}</button><br/>
        <button onClick={this.playClick} className="recorder-button">Play Recording</button><br/>
      </div>
    );
  }

});

module.exports = Recorder;
