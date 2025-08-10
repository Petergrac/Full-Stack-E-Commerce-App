"use client";
import { Suspense } from "react";
import CartPage from "./CartPage";
import Loading from "@/components/Loading";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <CartPage />
    </Suspense>
  );
}