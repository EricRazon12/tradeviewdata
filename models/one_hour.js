const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Schema_onehour = new Schema(
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

var one_hour = mongoose.model("one_hour", Schema_onehour);

//We are exporting the model
module.exports = one_hour;
