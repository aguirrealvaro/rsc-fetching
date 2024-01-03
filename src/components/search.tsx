"use client";

import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

type SearchProps = {
  pagination: number;
};

const Search = ({ pagination }: SearchProps) => {
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchParams = new URLSearchParams();

    if (e.target.value) {
      searchParams.append("search", e.target.value);
    }

    const route = searchParams.toString();
    router.push(`/${pagination}/?${route}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="search-bar">Search:</label>
      <input
        id="search-bar"
        type="search"
        className="w-full rounded border px-4 py-2 outline-offset-0"
        onChange={handleSearch}
      />
    </div>
  );
};

export { Search };
