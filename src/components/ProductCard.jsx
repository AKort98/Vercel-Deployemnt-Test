import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ data }) {
  return (
    <Link
      to={`/product/${data.id}`}
      className="flex flex-col gap-4 min-h-[400px] bg-gray-50 cursor-pointer p-4 overflow-x-auto rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
    >
      <div className="h-48 w-full overflow-hidden">
        <img
          src={data.image}
          alt="product image"
          className="h-full w-full object-contain mix-blend-multiply"
        />
      </div>
      <div className="truncate font-bold text-lg">{data.title}</div>
      <div className="line-clamp-2 text-sm ">{data.description}</div>
      <div className="font-semibold text-xl">${data.price}</div>
    </Link>
  );
}

export default ProductCard;
