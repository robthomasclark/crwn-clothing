import { ShopItem } from "./collection";
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

export interface MasterState {
  user: UserState;
  cart: CartState;
  directory: DirectoryState;
}
