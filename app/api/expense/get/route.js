import { connectDB } from "../../../../lib/mongodb";
import Expense from "../../../../models/Expense";

export async function GET() {
  try {
    await connectDB();
    const expenses = await Expense.find().sort({ date: -1 });
    return Response.json({
      success: true,
      expenses,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}
