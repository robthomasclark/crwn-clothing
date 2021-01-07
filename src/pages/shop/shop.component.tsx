import React from "react";
import { connect } from "react-redux";

import { Collection } from "../../types/collection";
import { MasterState } from "../../types/states";
import { selectShopData } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

interface Props {
  shopData: Collection[];
}

const ShopPage = (props: Props) => {
  const collections = props.shopData;
  return (
    <div className="shop-page">
      {collections.map((collection) => {
        return (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          ></CollectionPreview>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: MasterState) => {
  return { shopData: selectShopData(state) };
};

export default connect(mapStateToProps)(ShopPage);
