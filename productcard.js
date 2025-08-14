import React from "react";

export default function ProductCard({ product, quantity, onAdd, onUpdate }) {
  const maxQty = 20;
  const isMax = quantity >= maxQty;

  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-32 h-32 mb-4" />
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-green-700 font-bold">₹{product.price}</p>
      <p className="text-gray-500 line-through mb-3">₹{product.mrp}</p>

      {quantity === 0 ? (
        <button
          onClick={() => onAdd(product.id)}
          className="bg-[#328616] text-white px-4 py-2 rounded"
        >
          Add
        </button>
      ) : (
        <div className="flex items-center gap-1">
          <button
            onClick={() => onUpdate(product.id, quantity - 5)}
            disabled={quantity <= 0}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            &lt;&lt;
          </button>
          <button
            onClick={() => onUpdate(product.id, quantity - 1)}
            disabled={quantity <= 0}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            -
          </button>
          <span className="px-3">{quantity}</span>
          <button
            onClick={() => onUpdate(product.id, quantity + 1)}
            disabled={isMax}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            +
          </button>
          <button
            onClick={() => onUpdate(product.id, quantity + 5)}
            disabled={isMax}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            &gt;&gt;
          </button>
        </div>
      )}

      {isMax && (
        <p className="text-red-600 text-sm mt-2">
          Maximum 20 allowed per order. Please place another order if required.
        </p>
      )}
    </div>
  );
}
