"use client";

import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

type SearchProps = {
  pagination: number | undefined;
};

const Search = ({ pagination }: SearchProps) => {
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const initialSearchParams = pagination ? { pagination: `${pagination}` } : undefined;
    const searchParams = new URLSearchParams(initialSearchParams);

    if (e.target.value) {
      searchParams.append("search", e.target.value);
    } else {
      searchParams.delete("search", "");
    }

    const params = searchParams.toString();

    router.push(`/?${params}`);
  };

  return (
    <div className="mb-8 flex flex-col gap-2">
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
