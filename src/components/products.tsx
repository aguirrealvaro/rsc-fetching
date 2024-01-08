/* eslint-disable @next/next/no-img-element */
import { Pagination } from "./pagination";
import { PER_PAGE } from "@/config";
import { getProducts } from "@/lib";

type ProductsType = {
  search: string | undefined;
  page: number | undefined;
};

export const Products = async ({ search, page }: ProductsType) => {
  const { products, total } = await getProducts(search, page);

  return (
    <div>
      <ul className="mb-12 grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        {products.map((product) => {
          const { id, title, description, price, images } = product;

          return (
            <li key={id} className="rounded-lg bg-bg-secondary shadow-md">
              <img
                src={images[0]}
                alt={`Picture of ${title}`}
                className="w-full rounded-t-lg"
              />
              <div className="m-4 flex flex-col gap-2">
                <h3 className="font-semibold">{title}</h3>
                <p>{description}</p>
                <span className="font-bold">${price}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination pages={Math.ceil(total / PER_PAGE)} active={page} />
    </div>
  );
};
