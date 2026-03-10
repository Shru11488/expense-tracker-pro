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
      body: JSON.stringify({
        title,
        amount,
        category,
      }),
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-5">Add Expense</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
        />

        <input
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2"
        />

        <input
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2"
        />

        <button className="bg-blue-500 text-white p-2">Add Expense</button>
      </form>
    </div>
  );
}
