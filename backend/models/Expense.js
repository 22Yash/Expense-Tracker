import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link to User model
  subject: { type: String, required: true },
  merchant: { type: String, required: true },
  date: { type: Date, required: true },
  total: { type: Number, required: true },
  currency: { type: String, required: true, default: "USD" },
  reimbursable: { type: Boolean, default: false },
  category: { type: String, required: true },
  description: { type: String, default: "" },
  employee: { type: String, required: true },
  addToReport: { type: Boolean, default: false },
});

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;
