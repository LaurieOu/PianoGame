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
  playMessages: function() {
    if (!this.state.track.isBlank()) {
      return (
        <div>
          <img src="http://wasabiapp.org/wordpress/wp-content/uploads/playbutton.png" className="play-button"/>
        </div>
        )
    }
  },
  messages: function() {
    if (this.state.isRecording) {
      return (
        <div>
          <img src="https://lh3.ggpht.com/mfLTneC0BUBQOAI5Da7ftOz4HCoU3ibn7BMWcE9KDiUelzquRqhj8Ln2kR1iih3KVCE=w170" className="red-dot"/>
          <img src="http://freeiconbox.com/icon/256/23728.png" className="stop-button"/>
        </div>)
    }
    // else if (!this.state.isRecording && this.state.track.isBlank()) {
    //   return "Done"
    // }
    else {
      return <img src="https://cdn3.iconfinder.com/data/icons/line/36/record-512.png" className="record-button"/>
    }
  },
  render: function() {
    return (
      <div className="recorder-container">
        <div onClick={this.RecordClick}>{this.messages()}</div><br/>
        <div onClick={this.playClick} >{this.playMessages()}</div><br/>
      </div>
    );
  }

});

module.exports = Recorder;
