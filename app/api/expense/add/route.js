import { connectDB } from "@/lib/mongodb";
import Expense from "@/models/Expense";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const expense = await Expense.create(body);

    return Response.json({ success: true, data: expense });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
