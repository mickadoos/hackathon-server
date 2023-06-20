const router = require("express").Router();
const Location = require('../models/Location.model')
const Itinerary = require('../models/Itinerary.model')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/createLocation", (req, res, next) => {
  const {name, picture, description, popularity, coordinates} = req.body
  Location.create({name, picture, description, popularity, coordinates})
  .then(response => {
    res.json({message: 'Location succesfully created!', location: response})
  })
  .catch(err => {next(err)})

});


module.exports = router;
