"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleFilter = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    
    params.set("sort", value || "all");
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-600 my-6">
      <span>Sort By:</span>
      <select
        onChange={(e) => handleFilter(e.target.value)}
        name="sort"
        id="sort"
        className="ring-1 ring-gray-400 shadow-lg rounded-md p-1"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
