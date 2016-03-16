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
          <label className="instructions-text1">
            Welcome! You can practice independently and record yourself on the piano.
          </label><br/>

          <label className="instructions-text2">
            OR you can play "A Whole New World" from Aladdin! Type the letters inside the falling rectangles. --->
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
