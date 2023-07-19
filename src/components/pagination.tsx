import { FunctionComponent } from "react";
import Link from "next/link";

type PaginationProps = {
  pages: number;
};

const Pagination: FunctionComponent<PaginationProps> = ({ pages }) => {
  const pagesArray = Array.from(Array(pages).keys());

  return (
    <ul className="mx-auto flex w-1/4 justify-around">
      {pagesArray.map((page) => {
        const pageNumber = page + 1;
        return (
          <li key={pageNumber}>
            <Link href={`/${pageNumber}`} className="rounded border px-4 py-2">
              {pageNumber}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { Pagination };
