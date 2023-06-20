const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const itinerarySchema = new Schema(
  {
    attraction: { type: Schema.Types.ObjectId, ref: "Location" },
    locationList: [{ type: Schema.Types.ObjectId, ref: "Location" }],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Itinerary = model("Itinerary", itinerarySchema);

module.exports = Itinerary;
