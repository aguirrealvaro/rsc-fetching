export type ProductsType = {
  products: ProductType[];
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};
