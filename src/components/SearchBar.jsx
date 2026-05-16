
"use client";

import { Search } from "lucide-react";

const SearchBar = () => {

  return (
    <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-blue-600 transition-all overflow-hidden">

      <div className="pl-5 text-slate-400">
        <Search className="w-5 h-5" />
      </div>

      <input
        type="text"
        placeholder="Search for courses (e.g. Next.js, Web Design...)"
        className="flex-1 h-14 px-4 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
      />

      <button
        className="h-10 px-6 mr-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"

      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;