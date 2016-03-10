var React = require('react');
var Note = require('./note');

var Melody = [
'Q B4', 'Q C5', 'Q D5', 'Q D5', 'Q D5', 'A D5', 'Q D5', 'Q E5', 'Q D5', 'A C5', 'F BN',
'Q A4', 'Q C5', 'H C5', 'Q C5', 'Q C5', 'H E5', 'Q D5', 'T B4', 'H BN',
'Q D5', 'H G5', 'Q G5', 'A G5', 'Q E5', 'Q F5S', 'Q G5', 'Q A5', 'Q A5', 'A A5', 'Q BN',
'Q E5', 'Q G5', 'H A5', 'Q A5', 'Q B5', 'Q C6', 'H B5', 'Q G5', 'T A5', 'Q BN'
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
