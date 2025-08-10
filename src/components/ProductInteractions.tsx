"use client";

import useCartStore from "@/app/store/cartStore";
import { ProductsType } from "@/types/types";
import { Minus, Plus, ShoppingCartIcon } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductInteractions = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductsType;
  selectedSize: string;
  selectedColor: string;
}) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const {addToCart} = useCartStore()
  const handleAddToCart = () =>{
    console.log(quantity)
    addToCart({
        ...product,
        quantity: quantity,
        selectedColor: selectedColor,
        selectedSize: selectedSize
    });
   toast.success('Product added to cart')  
  }
  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  };
  const handleQuantityChange = (change: string) => {
    if (quantity > 0) {
      if (change === "decrement" && quantity > 1) {
        setQuantity((prev) => prev - 1);
      } else if (change === "increment") {
        setQuantity((prev) => prev + 1);
      }
    }
  };
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* SIZE */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-2 ">
          {product.sizes.map((size) => (
            <div
              className={`cursor-pointer text-sm p-[2px]  border-1 ${
                selectedSize === size ? "border-gray-600" : "border-gray-300"
              }`}
              key={size}
            >
              <div
                className={`w-7 h-7 flex items-center justify-center ${
                  selectedSize === size ? "bg-black text-white  " : "text-black"
                }`}
                onClick={() => handleTypeChange("size", size)}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* COLOR */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color</span>
        <div className="flex items-center gap-2 ">
          {product.colors.map((color) => (
            <div
              className={`cursor-pointer text-sm p-[2px]  border-1 ${
                selectedColor === color ? "border-gray-600" : "border-gray-300"
              }`}
              key={color}
            >
              <div
                style={{ background: color }}
                className={`w-7 h-7 ${
                  selectedColor === color ? "border-black" : ""
                }`}
                onClick={() => handleTypeChange("color", color)}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* QUANTITY */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantity</span>
        <div className="flex items-center gap-2">
          <button
            className="cursor-pointer border-1 border-gray-300 p-1"
            onClick={() => handleQuantityChange("decrement")}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span>{quantity}</span>
          <button
            className="cursor-pointer border-1 border-gray-300 p-1"
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* BUTTONS */}
      <button
        onClick={handleAddToCart}
        className="flex justify-center gap-2 border-1 hover:text-black transition-all duration-300 hover:bg-white text-sm font-medium shadow-lg cursor-pointer shadow-gray-600 border-black bg-gray-700  rounded-md text-white py-1"
      >
        <Plus />
        Add to Cart
      </button>
      <button className="flex gap-3 shadow-lg shadow-black/30 ring-1 cursor-pointer ring-gray-500 rounded-md transition-all duration-500 hover:bg-gray-800 hover:text-white py-1 justify-center">
        <ShoppingCartIcon className="w-5 h-5" />
        Buy this Item
      </button>
    </div>
  );
};

export default ProductInteractions;
