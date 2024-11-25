import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { BiLoader } from "react-icons/bi";

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      if (response.ok) {
        setAllProducts(data);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="animate-spin flex justify-center">
        <BiLoader size={32} />
      </div>
    );

  return (
    <div className="px-8">
      <ProductList data={allProducts} />
    </div>
  );
}

export default Home;
