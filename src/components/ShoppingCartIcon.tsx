"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import useCartStore from "@/app/store/cartStore";
const ShoppingCartIcon = () => {
  const {cart, hasHydrated} = useCartStore()
  if(!hasHydrated) return null;
  return (
    <Link className="relative" href="/cart">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="shoppingItems">
        {cart.reduce((acc,item)=>acc+item.quantity,0)}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
