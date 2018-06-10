const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = mongoose.Schema({
  location: {type: String, required: true},
  pads: {type: Number, required: true},
  handTrucks: {type: Number, required: true},
  padsReserved: {type: Number},
  handTrucksReserved: {type: Number},
  date: {type: String}
}, {collection: "Inventory"});

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;
