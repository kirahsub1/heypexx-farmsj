// types.ts
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  ratingsCount: number;
  image: string;
  overlayColor?: string; // Making it optional with ?
}
