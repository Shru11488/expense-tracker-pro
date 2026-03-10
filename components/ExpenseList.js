"use client";

import { useEffect, useState } from "react";

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const response = await fetch("/api/expenses/get");
    const data = await response.json();
    setExpenses(data.expenses);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl mb-4">Recent Expenses</h2>
      <div className="space-y-3">
        {expenses.map((expense) => (
          <div
            key={expense._id}
            className="p-4 border rounded flex justify-between"
          >
            <span>{expense.title}</span>
            <span>{expense.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
