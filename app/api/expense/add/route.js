import { connectDB } from "../../../../lib/mongodb";
import Expense from "../../../../models/Expense";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const expense = await Expense.create(body);

    return Response.json({
      success: true,
      expense,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}
