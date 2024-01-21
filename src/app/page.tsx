import { Suspense } from "react";
import { Products, Search, Skeleton } from "@/components";

type HomeProps = {
  searchParams: {
    search?: string;
    page?: string;
  };
};

const Home = async ({ searchParams }: HomeProps) => {
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams.page) || 1;

  return (
    <div className="flex flex-col gap-8">
      <Search currentPage={currentPage} />
      <Suspense key={search + currentPage} fallback={<Skeleton />}>
        <Products search={search} page={currentPage} />
      </Suspense>
    </div>
  );
};

export default Home;
