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
          <img src="http://www.streathamchoral.com/communities/6/004/012/793/646//images/4613017096.gif" className="notes-picture" />
          <div className="whole-new-world-instructions">
            <label className="instructions-text2">
              Welcome! You can play "A Whole New World" from Aladdin! Type the letters inside the falling rectangles.
            </label><br/>
            <button onClick={this.playSong} className="play-song-button">Play A Whole New World!</button>
          </div>

          <div className="whole-new-world-instructions">
            <label className="instructions-text1">
              OR you can practice independently and record yourself on the piano.
            </label><br/>
            <button onClick={this.individualPractice} className="practice-on-own-button">Practice On Your Own</button>
          </div>

        </div>
      )
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
