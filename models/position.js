const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coordinates = new GraphQLJSONObject({
  coordinates: {
    lat: Double,
    lon: Double,
  },
});
const positionSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },

    notes: {
      type: String,
    },

    coordinates: {
      type: [coordinates],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Position", positionSchema);
