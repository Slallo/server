const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const positionSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },

    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Position", positionSchema);