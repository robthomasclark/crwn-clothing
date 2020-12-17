export type ShopItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Collection = {
  id: number;
  title: string;
  routeName: string;
  items: ShopItem[];
};
