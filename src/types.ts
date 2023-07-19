export type ProductsType = {
  products: ProductType[];
  total: number;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};
