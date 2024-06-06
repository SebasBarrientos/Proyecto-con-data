const express = require('express');
const SaleController = require('../controllers/SaleController');
const router = express.Router();

router.post("/", SaleController.create);
router.get("/", SaleController.getAll);

module.exports = router;
