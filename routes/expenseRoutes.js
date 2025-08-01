const express = require('express');
const router = express.Router();
const {
  addExpense,
  editExistExpenses,
  getExpense,
  deleteExpense,
} = require("../controllers/expenseControllers");
const verify = require('../middlewares/authMiddlewares');

router.post("/expense", verify,  addExpense);
router.put("/expense/:id", verify, editExistExpenses);
router.get("/expense",verify,  getExpense);
router.delete("/expense/:id", verify, deleteExpense);
module.exports = router;