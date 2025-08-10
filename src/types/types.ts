import z from "zod";

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

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.email().min(1, "Email is required!"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 10 digits!")
    .max(10, "Phone number must be between 7 and 10 digits!")
    .regex(/^\d+$/, "Phone number must contain only numbers!"),
  address: z.string().min(1, "Address is required!"),
  city: z.string().min(1, "city is required!"),
});
export type shippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "CardHolder is required!"),
  cardNumber: z
    .string()
    .min(16, "Card Number is required!")
    .max(16, "Card Number is required!"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration date must be in MM/YY format!"
    ),
  cvv: z.string().min(3, "CVV is required!").max(3, "CVV is required!"),
});
export type paymentFormInputs = z.infer<typeof paymentFormSchema>;

export type CartStoreType = {
  cart: CartItemType[];
  hasHydrated: boolean;
};
export type CartActionType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};
