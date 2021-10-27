var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var MatchessSchema = new Schema({
  Team1Players: {
    type: Array,
  },
  Team2Players: {
    type: Array,
  },
  VideoUrl: {
    type: String
  },
  GameId: {
    type: ObjectId
  },
  GameVersion: {
    type: Number
  },
  Tags: {
    type: Array
  },
  WinnerIds: {
    type: Array
  },
  LosersIds: {
    type: Array
  }
}, {
  timestamps: true, 
});

var Matches = mongoose.model("Matches", MatchessSchema);

module.exports = Matches; 