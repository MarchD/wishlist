export interface Wish {
  id: number;
  url?: string;
  title: string;
  image?: string;
  price: string;
}

export interface WishListProps {
  wishes: Wish[];
}
