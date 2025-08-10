export interface ProductsType {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: { [key: string]: string };
}

export type CartItemType = ProductsType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};
export type cartItemsType = CartItemType[];
