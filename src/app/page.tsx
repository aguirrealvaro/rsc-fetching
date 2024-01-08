import { Suspense } from "react";
import { Products, Search } from "@/components";

type HomeProps = {
  searchParams: {
    search: string | undefined;
    pagination: string | undefined;
  };
};

const Home = async ({ searchParams }: HomeProps) => {
  const { search, pagination } = searchParams;

  const paginationAsNumber = pagination ? Number(pagination) : undefined;

  return (
    <div>
      <Search pagination={paginationAsNumber} />
      <Suspense fallback="loading">
        <Products search={search} pagination={paginationAsNumber} />
      </Suspense>
    </div>
  );
};

export default Home;
