import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

interface Props {
  match: {
    path: string;
  };
}

const ShopPage = (props: Props) => {
  const { match } = props;
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  );
};

export default ShopPage;
