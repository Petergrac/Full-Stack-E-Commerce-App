export interface ProductsType{
    id: number,
    name: string,
    description: string,
    shortDescription: string,
    price: number,
    sizes: string[],
    colors: string[],
    images: { [key: string]: string };
}