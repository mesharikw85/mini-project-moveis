const { model, Schema } = require("mongoose");

const MovieSchema = new Schema({
  title: { type: String, require: true },
  genre: { type: String, require: true },
  releasDate: { type: Date, default: 0 },
  posterImage: { type: String, require: true },
  ratings: [Number],
});

module.exports = model("Movies", MovieSchema);
