'use client';
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import React from "react";
import { FaMinus, FaPlus, FaX } from "react-icons/fa6";
import { useShoppingCart } from "use-shopping-cart";

const CartItem = ({ item }) => {
  const { removeItem, decrementItem, incrementItem } = useShoppingCart();

  // console.log('CartItem item:', item); 

  return (
    <div className="flex w-full justify-between mb-4 items-center h-[120px] border-b">
      <div className="w-[110px] h-[110px] relative">
        {/* Log if images are present */}
        {item.images ? (
          <Image
            src={urlFor(item.images[0]).url()} // Assuming images is an array, accessing the first image
            fill
            priority
            sizes="(max-width:110px) 110px,110px"
            className="object-contain"
            alt={item.name}
          />
        ) : (
          <div className="placeholder-image">No Image Available</div>
        )}
      </div>
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className="flex items-center justify-between">
          <h5>{item.name}</h5>
          <button onClick={() => removeItem(item.id)}>
            <FaX className="text-sm" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button onClick={() => decrementItem(item.id)}>
              <FaMinus />
            </button>
            <div className="font-semibold">{item.quantity}</div>
            <button onClick={() => incrementItem(item.id)}>
              <FaPlus />
            </button>
          </div>
          <div className="font-semibold text-balance">${item.price * item.quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
