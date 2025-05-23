import React from "react";
import { connect } from "react-redux";
import { selectShopData } from "../../redux/shop/shop.selectors";

import { MasterState, ShopState } from "../../types/states";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = (props: ShopState) => {
  const collections = props.shopData;
  return (
    <div className="collections-overview">
      {Object.entries(collections).map((collection) => {
        return (
          <CollectionPreview
            key={collection[0]}
            title={collection[1].title}
            items={collection[1].items}
          ></CollectionPreview>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: MasterState) => {
  return { shopData: selectShopData(state) };
};

export default connect(mapStateToProps)(CollectionsOverview);
