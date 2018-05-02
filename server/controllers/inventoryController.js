const db = require("../models");

module.exports = {
  updateInventory: function(req, res) {
    console.log(req.body);
    db.Inventory
      .findOneAndUpdate({location: req.body.location}, {pads: req.body.pads, handTrucks: req.body.handTrucks, date: req.body.date})
      .then(dbInventory =>{
        console.log("dbInventory: " + dbInventory);
        db.Inventory
          .findOne({location: req.body.location})
          .then(result => {
            console.log(result);
            res.json(result);
          })
      })
      .catch(err=>res.json(err))
  },
  getInventory: function(req, res) {
    db.Inventory
      .find()
      .then(dbInventory => {
        res.json(dbInventory);
      })
  }

}
