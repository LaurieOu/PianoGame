var React = require('react');
var Note = require('./note');

// 'Q B4', 'Q C5', 'Q D5', 'Q D5', 'Q D5', 'A D5', 'Q D5', 'Q E5', 'Q D5', 'A C5', 'F BN',
// 'Q A4', 'Q C5', 'H C5', 'Q C5', 'Q C5', 'H E5', 'Q D5', 'T B4', 'H BN',
// 'Q D5', 'H G5', 'Q G5', 'A G5', 'Q E5', 'Q F5S', 'Q G5', 'Q A5', 'Q A5', 'A A5', 'Q BN',
// 'Q E5', 'Q G5', 'H A5', 'Q A5', 'Q B5', 'Q C6', 'H B5', 'Q G5', 'T A5', 'Q BN'

var Melody = [
  'F F4S', 'H E4', 'F G4', 'H F4S', 'F D4', 'T A3', 'H BN',
  'F F4S', 'H E4', 'F G4', 'H F4S', 'F D4', 'T F4S', 'T E4',
  'F E4', 'H D4S', 'F F4S', 'H E4', 'F C4S', 'F E4', 'F D4',
  'F C4S', 'F D4', 'H B3', 'F C4S', 'F E4', 'F D4', 'H A3', 'H BN',

  'F F4S', 'H E4', 'F G4', 'H F4S', 'F D4', 'T A3', 'H BN',
  'F F4S', 'H E4', 'F G4', 'H F4S', 'F D4', 'T F4S', 'T E4',
  'F E4', 'H D4S', 'F F4S', 'H E4', 'F C4S', 'F E4', 'F D4',
  'F C4S', 'F D4', 'H B3', 'F C4S', 'F E4', 'F D4', 'T F4S', 'H BN',

  'F F4S', 'F G4', 'F B4', 'T A4',
  'H F4S', 'F G4', 'F B4','H A4', 'F E4', 'H G4', 'H BN', 'F F4S', 'H F4S', 'H BN',
  'H F4S', 'F G4', 'H A4', 'F C5S', 'F B4', 'F A4', 'H D4', 'H BN', 'F C5S', 'F B4', 'F A4', 'H BN',
  'H D4', 'H D4', 'H F4S', 'F E4', 'H D4', 'H A4', 'H B4', 'F D4', 'T E4',

  'F F4S', 'F G4', 'F B4', 'T A4',
  'H F4S', 'F G4', 'F B4','H A4', 'F E4', 'H G4', 'H BN', 'F F4S', 'H F4S', 'H BN',
  'H F4S', 'F G4', 'H A4','F C5S', 'F B4', 'F A4', 'H D4', 'H D4', 'F C5S', 'F D5', 'F A4',
  'H D4', 'H D4', 'F F4S','F E4', 'F D4', 'F E4', 'F G4', 'F F4S', 'F D4', 'F C4S', 'H D4'

];


var FightSong = React.createClass({
  notes: function() {
    return Melody.reverse().map(function(note) {
      return <Note note={note} />;
    });
  },
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
