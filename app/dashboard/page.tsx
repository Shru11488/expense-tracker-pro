import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Expense Tracker Dashboard</h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-gray-400">Total Balance</h2>
          <p className="text-2xl font-bold mt-2">₹25,000</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-gray-400">Income</h2>
          <p className="text-2xl font-bold mt-2 text-green-400">₹40,000</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-gray-400">Expenses</h2>
          <p className="text-2xl font-bold mt-2 text-red-400">₹15,000</p>
        </div>
      </div>

      {/* Recent Transactions */}

      <div className="bg-gray-900 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>

        <div className="space-y-3">
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span>Food</span>
            <span className="text-red-400">₹500</span>
          </div>

          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span>Travel</span>
            <span className="text-red-400">₹200</span>
          </div>

          <div className="flex justify-between">
            <span>Shopping</span>
            <span className="text-red-400">₹1200</span>
          </div>
        </div>
      </div>

      {/* Add Expense Button */}

      <Link href="/add-expense">
        <button className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600">
          Add Expense
        </button>
      </Link>
    </div>
  );
}
