import { connectDB } from "../../../../lib/mongodb";
import Expense from "../../../../models/Expense";

export async function DELETE(req) {
  try {
    await connectDB();

    const { id } = await req.json();

    await Expense.findByIdAndDelete(id);

    return Response.json({
      success: true,
      message: "Expense deleted",
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}
