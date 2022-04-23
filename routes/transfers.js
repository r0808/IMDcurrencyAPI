const express = require('express');
const router = express.Router();
const transfersController = require("../controllers/transfers");

router.get("/", transfersController.getAll);
router.get("/:id", transfersController.getById);
router.post("/", transfersController.create);

module.exports = router;