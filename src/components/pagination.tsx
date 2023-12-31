import Link from "next/link";
import { cn } from "@/utils/cn";

type PaginationProps = {
  pages: number;
  active: number | undefined;
};

const Pagination = ({ pages, active = 1 }: PaginationProps) => {
  const pagesArray = Array.from(Array(pages).keys());

  return (
    <ul className="mx-auto flex w-1/4 justify-around">
      {pagesArray.map((page) => {
        const pageNumber = page + 1;
        const isActive = active === pageNumber;

        const linkParams = () => {
          if (pageNumber === 1) {
            return "/";
          } else {
            return { query: { pagination: `${pageNumber}` } };
          }
        };

        return (
          <li key={pageNumber}>
            <Link
              href={linkParams()}
              className={cn(
                "rounded border px-4 py-2",
                isActive ? "border-blue-600 font-semibold text-blue-600" : ""
              )}
            >
              {pageNumber}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { Pagination };
