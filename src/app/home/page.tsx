/* eslint-disable @next/next/no-img-element */
import { ProductsType } from "@/types";

const Home = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const { products }: ProductsType = await response.json();

  return (
    <div>
      <ul className="grid grid-cols-2 gap-4">
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
    </div>
  );
};

export default Home;
