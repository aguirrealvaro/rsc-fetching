/* eslint-disable @next/next/no-img-element */
import { Pagination, Search } from "@/components";
import { PER_PAGE } from "@/config";
import { getProducts } from "@/lib";

type HomeProps = {
  searchParams: {
    search: string | undefined;
    pagination: string | undefined;
  };
};

const Home = async ({ searchParams }: HomeProps) => {
  const { search, pagination } = searchParams;

  const paginationAsNumber = pagination ? Number(pagination) : undefined;
  const { products, total } = await getProducts(search, paginationAsNumber);

  return (
    <div>
      <div className="mb-8">
        <Search pagination={paginationAsNumber} />
      </div>
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
      <Pagination pages={Math.ceil(total / PER_PAGE)} active={paginationAsNumber} />
    </div>
  );
};

export default Home;
