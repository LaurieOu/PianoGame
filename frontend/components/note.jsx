var React = require('react');

Mapping = {

 'A3': 'Z',
 'A3S': 'S',
 'B3': 'X',

 'C4': 'C',
 'C4S': 'F',
 'D4': 'V',
 'D4S': 'G',
 'E4': 'B',
 'F4': 'N',
 'F4S': 'J',
 'G4': 'M',
 'G4S': 'K',
 'A4': '<',
 'A4S': 'L',
 'B4': '>',
 'C5': '?',

 'C5': 'Q',
 'C5S': '2',
 'D5': 'W',
 'D5S': '3',
 'E5': 'E',
 'F5': 'R',
 'F5S': '5',
 'G5': 'T',
 'G5S': '6',
 'A5': 'Y',
 'A5S': '7',
 'B5': 'U',
 'C6': 'I',
 'C6S': '9',
 'D6': 'O'
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
