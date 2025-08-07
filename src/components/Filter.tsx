"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const Filter = () => {
  const searchParams = useParams();
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-600 my-6">
      <span>Sort By:</span>
      <select name="sort" id="sort" className="ring-1 ring-gray-400 shadow-lg rounded-md p-1">
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
