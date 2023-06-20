const router = require("express").Router();
const Itinerary = require("../models/Itinerary.model");
const Location = require("../models/Location.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/itinerary/:itineraryId/", (req, res, next)=>{
  let {itineraryId} = req.params;
  Itinerary.findById(itineraryId)
  .populate("attraction locationList")
  .then((itinerary)=>{
    res.json(itinerary)
  })
  .catch((err)=>next(err))
}) 

router.post("/createItinerary", (req, res, next) => {
  let { attraction, locationList } = req.body;
  const newItinerary = { attraction, locationList };
  Itinerary.create(newItinerary)
  .then((itinerary)=>{
    res.json(itinerary)
  })
  .catch((err)=>next(err))
})
router.post("/createLocation", (req, res, next) => {
  const {name, picture, description, popularity, coordinates} = req.body
  Location.create({name, picture, description, popularity, coordinates})
  .then(response => {
    res.json({message: 'Location succesfully created!', location: response})
  })
  .catch(err => {next(err)})

});


module.exports = router;
