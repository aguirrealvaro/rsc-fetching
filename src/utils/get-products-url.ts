const API_URL = process.env.API_URL;

export const getProductsUrl = (
  search: string | undefined,
  pagination: number,
  perPage: number
) => {
  if (!API_URL) {
    throw new Error("No API_URL provided");
  }

  if (!search) {
    return new URL(API_URL);
  }

  const url = new URL(`${API_URL}/search`);
  url.searchParams.append("q", search);
  url.searchParams.append("skip", (pagination - 1).toString());
  url.searchParams.append("limit", perPage.toString());

  return url;
};
