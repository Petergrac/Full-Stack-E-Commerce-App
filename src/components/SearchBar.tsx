import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 rounded-md ring-1 px-2 py-1 ring-gray-200 shadow-md">
      <Search className="w-4 h-4 text-gray-500" />
      <input
        id="search"
        placeholder="search"
        className="text-sm outline-none"
      />
    </div>
  );
};

export default SearchBar;
