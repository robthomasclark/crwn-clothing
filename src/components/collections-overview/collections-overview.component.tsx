import React from "react";
import { connect } from "react-redux";
import { selectShopData } from "../../redux/shop/shop.selectors";

import { MasterState, ShopState } from "../../types/states";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

interface Props {
  shopData: ShopState;
}

const CollectionsOverview = (props: Props) => {
  const collections = props.shopData.collections;
  if (collections) {
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
  } else {
    return (<div></div>)
  }
};

const mapStateToProps = (state: MasterState) => {
  return { shopData: selectShopData(state) };
};

export default connect(mapStateToProps)(CollectionsOverview);
