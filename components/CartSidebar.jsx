"use client";
import React from "react";
import { Sheet, SheetContent, SheetHeader } from "./ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { ScrollArea } from "./ui/scroll-area";
import CartItem from "./CartItem";
import CheckoutBtn from "./CheckoutBtn";

const CartSidebar = () => {
  const {
    cartCount,
    handleCartClick,
    cartDetails,
    shouldDisplayCart,
    totalPrice,
  } = useShoppingCart();

  // Debugging: Log the cart details and total price
  // console.log('Cart Details:', cartDetails);
  // console.log('Total Price:', totalPrice);

  // Calculate total price manually if cartDetails is not empty
  let calculatedTotalPrice = 0;
  if (cartDetails && Object.keys(cartDetails).length > 0) {
    calculatedTotalPrice = Object.values(cartDetails).reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
  }

  // Ensure displayTotalPrice is a valid number and non-negative
  const displayTotalPrice = (calculatedTotalPrice && !isNaN(calculatedTotalPrice)) ? Number(calculatedTotalPrice).toFixed(2) : '0.00';

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader className={"text-left mb-12"}>
          My Shopping Cart({cartCount})
        </SheetHeader>
        <>
          {cartCount === 0 ? (
            <div className="flex-center w-full h-[calc(100vh-200px)]"><h5>Your cart is empty</h5></div>
          ) : (
            <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
              {cartDetails && Object.entries(cartDetails).map(([key, item]) => (
                <CartItem key={key} item={item} />
              ))}
            </ScrollArea>
          )}
        </>
        {cartCount > 0 && (
          <div className="">
            <div className="flex justify-between font-semibold">
              <div className="uppercase mb-5">Total</div>
              <div className="">${displayTotalPrice}</div>
            </div>
            <CheckoutBtn />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
