import { ShopItem, Collection } from "./collection";
import { Item } from "./item";

export interface UserState {
  currentUser: null;
}

export interface CartState {
  hidden: boolean;
  cartItems: ShopItem[];
}

export interface DirectoryState {
  sections: Item[];
}

// export interface ShopState {
//   shopData: Collection[];
// }


export interface ShopState {
  shopData: {
    hats: Collection,
    sneakers: Collection,
    jackets: Collection,
    womens: Collection,
    mens: Collection
  }
}

export interface MasterState {
  user: UserState;
  cart: CartState;
  directory: DirectoryState;
  shop: ShopState;
}
