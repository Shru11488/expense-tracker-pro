"use client";

import { useEffect, useState } from "react";

export default function TransactionsPage() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const res = await fetch("/api/expense/get");
    const data = await res.json();
    setExpenses(data.expenses || []);
  };

  const deleteExpense = async (id) => {
    await fetch("/api/expense/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    setExpenses((prev) => prev.filter((exp) => exp._id !== id));
  };

  // 🔍 Filter Logic
  const filteredExpenses = expenses.filter((exp) => {
    const matchesSearch = exp.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || exp.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl font-bold mb-6">Transactions</h1>

      {/* 🔍 Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search expenses..."
          className="border p-2 rounded w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded w-full md:w-1/4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Other</option>
        </select>
      </div>

      {/* 📊 Expense List */}
      <div className="space-y-4">
        {filteredExpenses.length === 0 ? (
          <p className="text-gray-500">No matching expenses</p>
        ) : (
          filteredExpenses.map((expense) => (
            <div
              key={expense._id}
              className="p-4 border rounded-lg flex justify-between items-center hover:shadow-sm"
            >
              <div>
                <p className="font-medium">{expense.title}</p>
                <p className="text-sm text-gray-500">
                  ₹{expense.amount} • {expense.category || "Other"}
                </p>
              </div>

              <button
                onClick={() => deleteExpense(expense._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
