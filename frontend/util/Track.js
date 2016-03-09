//attrHash = {name, roll: recipe}
var keyStore = require('../stores/key_store');

var Track = function (attrHash) {
  var name = attrHash.name;
  var sheet = attrHash.roll;
  var nowTime;


  function startRecording() {
    sheet = [];
    nowTime = Date.now();
  }

  function addNotes() {
    var timeSlice = Date.now() - nowTime;
    var notes = keyStore.all();
    sheet.push({"timeSlice": timeSlice, "notes": notes});
  }

  function stopRecording() {
    this.addNotes([]);
  }

};

module.exports = Track;
