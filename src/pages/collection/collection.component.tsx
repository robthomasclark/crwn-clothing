import React from "react";
import { connect } from "react-redux";

import { MasterState } from "../../types/states";
import { Collection } from "../../types/collection";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

interface Props {
  match: {
    path: string;
    params: {
      collectionId: string;
    };
  };
  collection: Collection;
}

const CollectionPage = (props: Props) => {
  const { collection } = props;
  if (collection) {
    return (
      <div className="collection-page">
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
          all={collection.items.length}
        />
      </div>
    );
  } else {
    return (<div></div>)
  }
};

const mapStateToProps = (state: MasterState, ownProps: Props) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
