"use client";

import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

type SearchProps = {
  pagination: number | undefined;
};

const Search = ({ pagination }: SearchProps) => {
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchParams = new URLSearchParams();

    if (pagination) {
      searchParams.append("pagination", `${pagination}`);
    }

    if (e.target.value) {
      searchParams.append("search", e.target.value);
    }

    const params = searchParams.toString();

    if (params) {
      router.push(`/?${params}`);
    }
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
