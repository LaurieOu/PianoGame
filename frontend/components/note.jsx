var React = require('react');

Mapping = {
 'C4': 'z',
 'C4S': 's',
 'D4': 'x',
 'D4S': 'd',
 'E4': 'c',
 'F4': 'v',
 'F4S': 'g',
 'G4': 'b',
 'G4S': 'h',
 'A4': 'n',
 'A4S': 'j',
 'B4': 'm',
  'C5': ',',

 'C5': 'q',
 'C5S': '2',
 'D5': 'w',
 'D5S': '3',
 'E5': 'e',
 'F5': 'r',
 'F5S': '5',
 'G5': 't',
 'G5S': '6',
 'A5': 'y',
 'A5S': '7',
 'B5': 'u',
 'C6': 'i',
};

var Note = React.createClass({
  componentDidMount: function() {

  },

  render: function() {
    var type = "";
    var note = this.props.note.slice(2);
    var beat = this.props.note.slice(0,1);

    if (this.props.note.slice(-1) === "S") {
      type = "falling-sharp-note"
    } else {
      type = "falling-regular-note"
    }

    var letter = Mapping[note];
    var classes = note + " " + beat + " " + type;
    return (
      <div className={"music-note " + classes}>{letter}</div>
    );
  }
});

module.exports = Note;
