const express = require("express");
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions } = require("../controller/transactionsController");
const { getBudget } = require("../controller/budgetController");

router
    .route("/")
    .get(getTransactions)

module.exports = router;