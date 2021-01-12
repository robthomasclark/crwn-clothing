import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux"

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import { ShopState } from "../../types/states";

interface Props {
  match: {
    path: string;
  };
  updateCollections: any;
}

class ShopPage extends React.Component<Props> {

  //typing a function is time consuming, so, cheacting and making any
  unsubscribeFromSnapshot: any = null;

  componentDidMount() {
    const { updateCollections } =  this.props
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot= collectionRef.onSnapshot(async snapshot  => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
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

const mapDispatchToProps = (dispatch: any) => {
  return ({ updateCollections: (collectionsMAP:ShopState) => dispatch(updateCollections(collectionsMAP)) })
}

export default connect(null, mapDispatchToProps)(ShopPage);
