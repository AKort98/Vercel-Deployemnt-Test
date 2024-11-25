import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingComponent from "../components/RatingComponent";

function Product() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      } else {
        setProduct(null);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="px-8 py-4">
      <div className="flex flex-col md:flex-row gap-36">
        <div className=" ml-0 md:ml-24 ">
          <img src={product.image} alt="product image" className="w-[400px]" />
        </div>
        <div className="bg-gray-100 rounded-2xl px-4 py-2 flex flex-col w-full gap-4">
          <div className="flex flex-col gap-1">
            <div className="text-xl font-bold">{product.title}</div>
            <div className="capitalize text-black/60 text-sm">
              {product.category}
            </div>
          </div>
          <div className="text-black/80">{product.description}</div>
          <div className="text-black font-semibold text-3xl">
            ${product.price}
          </div>
          <div>
            <RatingComponent rating={product.rating?.rate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
