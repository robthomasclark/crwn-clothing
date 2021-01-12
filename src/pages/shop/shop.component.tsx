import React from "react";
import { Route } from "react-router-dom";

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

interface Props {
  match: {
    path: string;
  };
}

class ShopPage extends React.Component<Props> {

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot  => {
      console.log("snapshot", snapshot);
      convertCollectionSnapshotToMap(snapshot);
      
    })
  }

  //const ShopPage = (props: Props) =>
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
