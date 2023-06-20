const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const locationSchema = new Schema(
  {
    name: String,
    picture: String,
    description: String,
    popularity: Number,
    coordinates: { lat: Number, lng: Number },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Location = model("Location", locationSchema);

module.exports = Location;
