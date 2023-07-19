/* eslint-disable @next/next/no-img-element */
import { Pagination, Search } from "@/components";
import { ProductsType } from "@/types";

const PER_PAGE = 10;

type HomeProps = {
  params: {
    pagination: string;
  };
  searchParams: {
    search: string | undefined;
  };
};

const Home = async ({ params, searchParams }: HomeProps) => {
  const { pagination } = params;
  const { search } = searchParams;

  const paginationAsNumber = parseInt(pagination);

  // TO DO: Move this to env var and function buildUrl
  const baseUrl = "https://dummyjson.com/products";
  const searchUrl = search ? `/search?q=${search}` : "";
  const unionSearchWithPagination = search ? "&" : "?";
  const paginationUrl = `skip=${paginationAsNumber - 1}&limit=${PER_PAGE}`;
  const url = `${baseUrl}${searchUrl}${unionSearchWithPagination}${paginationUrl}`;

  const response = await fetch(url);

  const { products, total }: ProductsType = await response.json();

  return (
    <div>
      <div className="mb-8">
        <Search pagination={paginationAsNumber} />
      </div>
      <ul className="mb-12 grid grid-cols-4 gap-4">
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
      <Pagination pages={Math.ceil(total / PER_PAGE)} active={paginationAsNumber} />
    </div>
  );
};

export default Home;
