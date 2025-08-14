import React, { useState } from "react";
import Header from "./header";
import products from "./productdata";
import ProductCard from "./productcard";

function App() {
  const [cart, setCart] = useState({});

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const handleAdd = (id) => {
    setCart((prev) => ({ ...prev, [id]: 1 }));
  };

  const handleUpdate = (id, newQty) => {
    if (newQty <= 0) {
      setCart((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    } else if (newQty <= 20) {
      setCart((prev) => ({ ...prev, [id]: newQty }));
    }
  };

  return (
    <div>
      <Header cartCount={totalItems} />
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={cart[product.id] || 0}
            onAdd={handleAdd}
            onUpdate={handleUpdate}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
