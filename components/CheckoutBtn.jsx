"use client"
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

const CheckoutBtn = () => {
  const { redirectToCheckout } = useShoppingCart();
  const handleCheckOut = async () => {
    try {
      const res = await redirectToCheckout();
      if (res?.error) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className="btn btn-primary w-full" onClick={handleCheckOut}>
      Proceed to checkout
    </button>
  );
};

export default CheckoutBtn;