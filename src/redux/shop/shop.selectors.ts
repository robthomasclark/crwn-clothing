import { createSelector } from "reselect";
import { MasterState } from "../../types/states";

const selectShop = (state: MasterState) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop
);

// in order to get this to compile in typscript, I'm forcing a valid return value
// and will return the first collection, een though that case will never happen.
export const selectCollection = (collectionUrlParam: string) =>
  createSelector([selectShop], (shop) => {
    return Object(shop)[collectionUrlParam];
  });
