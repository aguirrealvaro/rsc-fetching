export const getProductsUrl = (
  search: string | undefined,
  pagination: number,
  perPage: number
) => {
  const searchUrl = search ? `/search?q=${search}` : "";
  const unionSearchWithPagination = search ? "&" : "?";
  const paginationUrl = `skip=${pagination - 1}&limit=${perPage}`;
  const url = `${process.env.API_URL}${searchUrl}${unionSearchWithPagination}${paginationUrl}`;
  return url;
};
