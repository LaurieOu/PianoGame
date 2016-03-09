var React = require('react');
var Note = require('./note');

var Melody = [
'H G4','H G4','Q G4','Q G4','Q F4S','Q F4S','H G4','H G4','Q G4','E G4',
'E G4','Q A4', 'F G4'];


var FightSong = React.createClass({
  notes: function() {
    return Melody.reverse().map(function(note) {
      return <Note note={note} />;
    });
  },
  // componentDidMount: function() {
  //   setInterval(10);
  // },
  render: function(){
      var notes = this.notes();

      return (
        <div>
          {notes}
        </div>
      );
  }

});

module.exports = FightSong;
