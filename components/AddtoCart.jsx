'use client';
import React, { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useToast } from "./ui/use-toast";
const AddtoCart = ({ btnStyles, text, icon, id, currency, name, description, images, price ,price_id}) => {
  const { addItem } = useShoppingCart();

  // useEffect(() => {
  //   console.log('AddtoCart props:', { id, currency, name, description, images, price }); 
  // }, [id, currency, name, description, images, price]);

  const bike = {
    id,
    currency,
    name,
    description,
    images, // Ensure images are included
    price,
    price_id,
  };
  const {toast} = useToast();

  return (
    <button
      className={btnStyles}
      onClick={() => {
        addItem(bike); 
        toast({title: `${bike.name} has been added to the cart`})
      }}
    >
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddtoCart;
