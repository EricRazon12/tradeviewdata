const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Schema5 = new Schema(
  {
    ticker: { type: String },
    time: { type: Date },
    open: { type: Number },
    close: { type: Number },
    high: { type: Number },
    low: { type: Number },
    green: { type: Number },
    red: { type: Number },
    chop: { type: Number },
  },
  {
    timestamps: true,
  }
);

var five_minutes = mongoose.model("five_minutes", Schema5);

//We are exporting the model
module.exports = five_minutes;
