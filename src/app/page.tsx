import { Suspense } from "react";
import { Products, Search } from "@/components";

type HomeProps = {
  searchParams: {
    search: string | undefined;
    page: string | undefined;
  };
};

const Home = async ({ searchParams }: HomeProps) => {
  const { search, page: pageAsString } = searchParams;
  const page = pageAsString ? Number(pageAsString) : undefined;

  return (
    <>
      <Search page={page} />
      <Suspense fallback="loading">
        <Products search={search} page={page} />
      </Suspense>
    </>
  );
};

export default Home;
