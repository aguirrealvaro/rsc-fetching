import { PER_PAGE } from "@/config";

const API_URL = process.env.API_URL;

export const getProductsUrl = (search: string | undefined, pagination: number | undefined) => {
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
