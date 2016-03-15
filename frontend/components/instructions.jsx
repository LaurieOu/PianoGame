var React = require('react');
var FightSong = require('./FightSong');

var Instructions = React.createClass({
  getInitialState: function() {
    return {show: true, showFightSong: false };
  },
  individualPractice: function() {
    this.setState({show: false});
  },
  playSong: function() {
    this.setState({show: false});
  this.setState({showFightSong: true});
  },
  render: function() {
    var instructions = "";
    if (this.state.show) {
      instructions = (
        <div className="instructions-container">
          <label>
            Welcome! You can practice and record yourself on the piano or you can play a song we have written, just type
            the letter you see inside the falling rectangles.
          </label><br/>
          <button onClick={this.individualPractice} className="practice-on-own-button">Practice On Your Own</button>
          <button onClick={this.playSong} className="play-song-button">Play A Whole New World!</button>
        </div>)
    };

    var fightSong = "";
    if(this.state.showFightSong) {
      fightSong = (
        <FightSong />
      )
    };

    return (
      <div>
        {instructions}
        {fightSong}
      </div>
    );
  }
});

module.exports = Instructions;
