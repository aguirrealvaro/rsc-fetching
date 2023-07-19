"use client";

import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

type SearchProps = {
  pagination: number;
};

const Search = ({ pagination }: SearchProps) => {
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const route = e.target.value ? `?search=${e.target.value}` : "/";
    router.push(`/${pagination}/${route}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="search-bar">Search:</label>
      <input
        id="seach-bar"
        type="search"
        className="w-full rounded border px-4 py-2 outline-offset-0"
        onChange={handleSearch}
      />
    </div>
  );
};

export { Search };
