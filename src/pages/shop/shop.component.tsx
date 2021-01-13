import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import { ShopState } from "../../types/states";

interface Props {
  match: {
    path: string;
  };
  updateCollections: any;
}

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component<Props> {
  state = {
    loading: true,
  };

  //typing a function is time consuming, so, cheacting and making any
  unsubscribeFromSnapshot: any = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
  }

  //const ShopPage = (props: Props) =>
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading}{...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateCollections: (collectionsMAP: ShopState) =>
      dispatch(updateCollections(collectionsMAP)),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
