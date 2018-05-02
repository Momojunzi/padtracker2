const router = require('express').Router();
const Inventory = require("../models/inventory.js");
const inventoryController = require("../controllers/inventoryController.js");

router.route("/updateInventory")
  .post(inventoryController.updateInventory);

router.route("/getInventory")
  .get(inventoryController.getInventory);

router.route("/test")
  .get((req,res)=>{res.json("api test")});


module.exports = router;
