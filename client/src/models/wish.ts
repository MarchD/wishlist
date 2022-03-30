export interface Wish {
  id: string;
  url?: string;
  title: string;
  image?: string;
  price: string;
}

export type WishProps = Wish & { onClick?: (id: string) => void };

export interface WishListProps {
  wishes: Wish[];
}
