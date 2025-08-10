"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
const ShoppingCartIcon = () => {
  return (
    <Link className="relative" href="/cart">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="shoppingItems">
        0
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
