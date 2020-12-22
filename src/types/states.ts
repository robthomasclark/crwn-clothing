import { ShopItem } from "./collection";

export interface UserState {
  currentUser: null;
}

export interface CartState {
  hidden: boolean;
  cartItems: ShopItem[];
}

export interface MasterState {
    user: UserState;
    cart: CartState;
}
