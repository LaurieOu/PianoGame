var React = require('react');

var Note = React.createClass({

  render: function() {
    var type = "";
    var note = this.props.note.slice(2);
    var beat = this.props.note.slice(0,1);

    if (this.props.note.slice(-1) === "S") {
      type = "falling-sharp-note"
    } else {
      type = "falling-regular-note"
    }

    var classes = note + " " + beat + " " + type;
    return (
      <div className={"music-note " + classes}>{note}</div>
    );
  }
});

module.exports = Note;



//check whether or not note is on screen and if note actually appears
