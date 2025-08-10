"use client";

import {
  Briefcase,
  Footprints,
  Glasses,
  Hand,
  Shirt,
  ShoppingBasket,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

const Categories = () => {

  // Search parameter hook
  const searchParams = useSearchParams();
  // Navigator hook - > use it to set params
  const router = useRouter();
  // Use it to get the urlpath
  const pathName = usePathname();
  const selectedCategory = searchParams.get("category");

  const handleChange = (slug: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", slug || "all");
    router.push(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="categories">
      {categories.map((category) => (
        <div
          className={`flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md
            ${
              category.slug === selectedCategory ? "bg-white" : "text-gray-500"
            }`}
          key={category.name}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
