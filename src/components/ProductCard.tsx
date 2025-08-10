"use client";
import Link from "next/link";
import { ProductsType } from "@/types/types";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import useCartStore from "@/app/store/cartStore";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: ProductsType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });
  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };
  const {addToCart} = useCartStore()
  const handleAddToCart = () =>{
    addToCart({
      ...product,
      quantity:1,
      selectedSize: productTypes.size,
      selectedColor: productTypes.color
    })
    toast.success("Product Added to cart");
  }
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        {/* IMAGE */}
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            className="object-cover hover:scale-105 transition-all duration-300"
            fill
          />
        </div>
      </Link>
      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* PRODUCT TYPES */}
        <div className="flex items-center gap-4 text-xs">
          {/* SIZE */}
          <div className="flex  flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 py-1 px-2 rounded-md "
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* COLORS */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`cursor-pointer border-1 p-[1.2px] rounded-full ${
                    productTypes.color === color
                      ? `border-gray-400`
                      : "border-gray-200"
                  }`}
                  onClick={() =>
                    handleProductType({ type: "color", value: color })
                  }
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* PRICE & ADD TO CART BUTTON */}
        <div className="flex justify-between items-center">
          <p className="font-medium">$ {product.price.toFixed(2)}</p>
          <button
          onClick={handleAddToCart}
          className="button-cart">
            <ShoppingCart /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
