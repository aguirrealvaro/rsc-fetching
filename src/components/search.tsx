"use client";

import { ChangeEvent } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ currentPage }: { currentPage: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      params.set("search", e.target.value);
      params.set("page", currentPage.toString());
    } else {
      params.delete("search");
      params.delete("page");
    }

    router.replace(`${pathname}/?${params.toString()}`);
  }, 500);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="search-bar">Search:</label>
      <input
        id="search-bar"
        placeholder="Search products..."
        type="search"
        className="w-full rounded border px-4 py-2 outline-offset-0"
        onChange={handleSearch}
        defaultValue={searchParams.get("search") || undefined}
      />
    </div>
  );
};

export { Search };
