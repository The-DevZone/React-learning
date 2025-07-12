import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-2xl p-10 rounded-2xl text-center w-[90%] max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">🧮 Counter App</h1>
        <p className="text-4xl font-extrabold text-purple-600 mb-6">{count}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleCount}
            className="px-5 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
          >
            ➕ Increase
          </button>

          <button
            onClick={() => count > 0 && setCount(count - 1)}
            className="px-5 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition"
          >
            ➖ Decrease
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            🔁 Reset
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Max count allowed: <span className="font-semibold">10</span>
        </p>
      </div>
    </div>
  );
}
