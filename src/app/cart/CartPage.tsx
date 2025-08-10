"use client";

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { shippingFormInputs } from "@/types/types";
import { ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import useCartStore from "../store/cartStore";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1");

  const [shippingForm, setShippingForm] = useState<shippingFormInputs>();
  const { cart, removeFromCart } = useCartStore();
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* STEPS */}
      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-500"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* STEPS & DETAILS */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* STEPS */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id + item.selectedColor + item.selectedSize}
                  className="flex items-center justify-between"
                >
                  {/* IMAGE & DETAILS */}
                  <div className="flex gap-8">
                    {/* IMAGE */}
                    <div className="relative w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
                      <Image
                        className="object-contain"
                        src={item.images[item.selectedColor]}
                        alt={item.name}
                        fill
                      />
                    </div>
                    {/* ITEM DETAILS */}
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-xs text-gray-500">
                          Size: {item.selectedSize}
                        </p>
                        <p className="text-xs text-gray-500">
                          Color: {item.selectedColor}
                        </p>
                      </div>
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  {/* DELETE BUTTON */}
                  <button
                    onClick={() => removeFromCart(item)}
                    className="cart-delete-button"
                  >
                    <Trash2 />
                  </button>
                </div>
              ))
            ) : (
              <p className=" text-center text-gray-500 text-sm">
                Your Cart is empty
              </p>
            )
          ) : activeStep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p>Please fill in the shipping form.</p>
          )}
        </div>
        {/* DETAILS */}
        <div className="w-full h-max lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4 ">
            <div className="flex justify-between text-sm">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-600">Discount(10%)</p>
              <p className="font-medium">$ 10</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-600">Shipping Fee</p>
              <p className="font-medium">$ 10</p>
            </div>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between">
            <p className="font-medium">Total</p>
            <p className="font-medium">
              $
              {cart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
          {activeStep === 1 ? (
            <button
              onClick={() => router.replace(`?step=2`, { scroll: false })}
              className={`detail-button ${
                cart.length === 0
                  ? "text-gray-500 bg-gray-200"
                  : " hover:bg-gray-900  bg-gray-800 text-white"
              }`}
              disabled={(cart.length === 0)? true : false}
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
