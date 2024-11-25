import React, { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ data }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 flex gap-8 flex-col">
      <div className="self-center md:self-end">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300  w-full sm:w-96 rounded-2xl"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard data={product} />
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
