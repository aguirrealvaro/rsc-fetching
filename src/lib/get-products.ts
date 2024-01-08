import { PER_PAGE } from "@/config";
import { ProductsType } from "@/types";

const API_URL = process.env.API_URL;

const getUrl = (search: string | undefined, pagination: number | undefined) => {
  if (!API_URL) {
    throw new Error("No API_URL provided");
  }

  if (!search) {
    return new URL(API_URL);
  }

  const url = new URL(`${API_URL}/search`);
  url.searchParams.append("q", search);

  if (pagination) {
    url.searchParams.append("skip", (pagination - 1).toString());
    url.searchParams.append("limit", PER_PAGE.toString());
  }

  return url;
};

export const getProducts = async (
  search: string | undefined,
  pagination: number | undefined
): Promise<ProductsType> => {
  const url = getUrl(search, pagination);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// getProducts with delay, to test fallback suspense
/* export const getProducts = async (
  search: string | undefined,
  pagination: number | undefined
): Promise<ProductsType> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const url = getUrl(search, pagination);
      const response = await fetch(url);
      const data = await response.json();
      resolve(data);
    }, 5000);
  });
}; */
