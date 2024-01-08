import { Suspense } from "react";
import { Products, Search } from "@/components";

type HomeProps = {
  searchParams: {
    search: string | undefined;
    pagination: string | undefined;
  };
};

const Home = async ({ searchParams }: HomeProps) => {
  const { search, pagination: paginationAsString } = searchParams;
  const pagination = paginationAsString ? Number(paginationAsString) : undefined;

  return (
    <>
      <Search pagination={pagination} />
      <Suspense fallback="loading">
        <Products search={search} pagination={pagination} />
      </Suspense>
    </>
  );
};

export default Home;
