"use client";

import { useEffect, useState } from "react";

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const res = await fetch("/api/expense/get");
    const data = await res.json();
    console.log(data);
    setExpenses(data.expenses);
  };

  const deleteExpense = async (id) => {
    await fetch("/api/expense/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    fetchExpenses();
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl mb-4">Recent Expenses</h2>

      <div className="space-y-3">
        {expenses.map((expense) => (
          <div
            key={expense._id}
            className="p-4 border rounded flex justify-between items-center"
          >
            <span>
              {expense.title} - ₹{expense.amount}
            </span>

            <button
              onClick={() => deleteExpense(expense._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
