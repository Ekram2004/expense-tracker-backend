const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
    try {
        const { amount, date, category, description } = req.body;
        if (!amount || !category) {
          return res
            .status(400)
            .json({ error: "Amount and category are required." });
        }
        const expense = new Expense({
          amount,
          date,
          category,
          description,
          user: req.user._id,
        });
        await expense.save();
        res.status(201).json(expense);
    } catch (err) {
        console.error('expense adding error', err);
        res.status(500).json({ error: 'expense adding failed' });
    }
}
exports.editExistExpenses = async (req, res) => {
    try {
      const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!expense) {
        return res.status(404).json({ error: "Expense not found." });
      }
      res.status(200).json(expense);
    } catch (err) {
      console.error("Expense update error:", err);
      res.status(500).json({ error: "Expense update failed." });
    }
}
exports.getExpense = async (req, res) => {
  try {
    const { category } = req.query;

    const filter = { user: req.user._id };
    if (category) {
      filter.category = category;
    }

    const expenses = await Expense.find(filter);
    res.status(200).json(expenses);
  } catch (err) {
    console.error('Expense retrieval error', err);
    res.status(500).json({ error: 'Fetching expenses failed' });
  }
};

exports.deleteExpense = async (req, res) => {
    try {
      const expense = await Expense.findByIdAndDelete(req.params.id);
      if (!expense)
        return res.status(404).json({ error: "Expense not found." });
      res.status(200).json({ message: "expense deleted successfully" });
    } catch (err) {
      console.error("Expense delete error:", err);
      res.status(500).json({ error: "Expense delete failed." });
    }
}