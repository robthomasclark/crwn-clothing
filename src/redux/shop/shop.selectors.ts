import { createSelector } from "reselect";
import { MasterState } from "../../types/states";

const selectShop = (state: MasterState) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);
