import { ShopItem } from "../../types/collection";

export const addItemToCart = (
  cartItems: ShopItem[],
  cartItemToAdd: ShopItem
) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, cartItemToAdd];
};

export const removeItemFromCart = (
  cartItems: ShopItem[],
  cartItemToRemove: ShopItem
) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );
  if (existingCartItem && existingCartItem.quantity > 1) {
    return cartItems.map((item) =>
      item.id === cartItemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  } else if (existingCartItem) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  }
  return [...cartItems];
};

export const clearItemFromCart = (
  cartItems: ShopItem[],
  cartItemToClear: ShopItem
) => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id);
};
