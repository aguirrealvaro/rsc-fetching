import { PER_PAGE } from "@/config";
import { ProductsType } from "@/types";

const API_URL = process.env.API_URL;

const getUrl = (search: string, page: number) => {
  if (!API_URL) {
    throw new Error("No API_URL provided");
  }

  if (!search) {
    return new URL(API_URL);
  }

  const url = new URL(`${API_URL}/search`);
  url.searchParams.append("q", search);

  url.searchParams.append("skip", (page - 1).toString());
  url.searchParams.append("limit", PER_PAGE.toString());

  return url;
};

export const getProducts = async (search: string, page: number): Promise<ProductsType> => {
  const url = getUrl(search, page);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
