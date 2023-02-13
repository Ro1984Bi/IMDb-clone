"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return

    router.push(`/search/${search}`)

    setSearch('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
        className="w-full h-4 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button disabled={!search} type="submit" className="text-amber-600 disabled:text-gray-400">
        Search
      </button>
    </form>
  );
}
