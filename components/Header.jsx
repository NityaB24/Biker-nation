"use client";
import Link from "next/link";
import React from "react";
import { CgShoppingBag } from "react-icons/cg";
import Nav from "./Nav";
import CartSidebar from "./CartSidebar";
import { useShoppingCart } from "use-shopping-cart";

const Header = () => {
    const {
    cartCount,
    handleCartClick,
    cartDetails,
    shouldDisplayCart,
    totalPrice,
  } = useShoppingCart();
  return (
    <header className="bg-white shadow-lg sticky top-0 py-8 z-40">
        <div className="container mx-auto flex justify-between items-center">
            <Link href={"/"} className="hover:text-current">
                <h1 className="text-[26px]">
                    <span className="text-accent">BIKER</span>nation
                    </h1>
            </Link>
            <div className="flex flex-row gap-6">
                <Nav containerStyles='flex gap-[36px]'/>
                <div className="relative cursor-pointer" onClick={handleCartClick}>
                    <CgShoppingBag className="text-[26px]"/>
                    <div className="bg-accent w-[18px] h-[18px] absolute -right-1 -top-1 rounded-full flex-center text-sm font-medium text-white">{cartCount}</div>
                </div>
            </div>
            <CartSidebar/>
        </div>
    </header>
  )
}

export default Header