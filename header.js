import React from "react";

export default function Header({ cartCount }) {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold">🏗 HomeRun Cart</h1>
      <div className="relative">
        <span className="text-2xl">🛒</span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-sm">
            {cartCount}
          </span>
        )}
      </div>
    </header>
  );
}
