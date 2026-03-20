"use client";

import { useState } from "react";

export default function AddExpense() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/expense/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        category,
      }),
    });

    // Reset form 🔥
    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-5">Add Expense</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
        />

        <input
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2"
        />

        {/* ✅ DROPDOWN ADDED HERE */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>

        <button className="bg-blue-500 text-white p-2 rounded">
          Add Expense
        </button>
      </form>
    </div>
  );
}
