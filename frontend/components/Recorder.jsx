var React = require('react');
var keyStore = require('../stores/key_store');
var Track = require('../util/Track');


var Recorder = React.createClass({
  getInitialState: function() {
    return {isRecording: false, track: []};
  },
  componentWillMount: function() {
    this.setState({track: new Track({'name': "", roll:[]})});
  },
  recording: function() {
    var track = this.state.track;
    console.log(track);
    if (this.state.isRecording === false) {
      track.startRecording();
      this.setState({isRecording: true});
      var token = setInterval(track.addNotes(), 10);
    }
  },
  endRecording: function () {
    var track = this.state.track;

    if (this.state.isRecording) {
      this.setState({isRecording: false});
      var token;
    }

    track.stopRecording();
  },
  render: function() {
    return (
      <div>
        <button onClick={this.recording}>Start</button>
        <button onClick={this.endRecording}>Stop</button>
      </div>
    );
  }

});

module.exports = Recorder;
