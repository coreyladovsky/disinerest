var express = require("express");
var router = express.Router();
const {
  createPin,
  getPins,
  getPin,
  deletePin,
  updatePin,
  filterPins
} = require("../quieries/pinsQuieries");

router.post("/", createPin);
router.get("/", getPins);
router.post("/search", filterPins);
router.get("/:id", getPin);
router.delete("/:id", deletePin);
router.patch("/:id", updatePin);

module.exports = router;
