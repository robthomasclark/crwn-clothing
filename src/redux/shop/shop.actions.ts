import { ShopActionTypes } from "../../types/actions";
import { ShopState } from "../../types/states";

export const updateCollections = (collectionsMap: ShopState) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})