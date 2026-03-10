import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: String,
  title: String,
  amount: Number,
  type: String,
  category: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);
