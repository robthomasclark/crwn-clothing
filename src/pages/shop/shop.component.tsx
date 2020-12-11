import React from "react";

import { Collection } from "../../types/collection";
import { SHOP_DATA } from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

type Props = {};

type State = {
  collections: Collection[];
};

class ShopPage extends React.Component<Props> {
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const {collections} = this.state;
    return <div className="shop-page">
      {
        collections.map((collection) => {
          return (
            <CollectionPreview key={collection.id} title={collection.title} items={collection.items}></CollectionPreview>
          )

        })
      }

    </div>;
  }
}

export default ShopPage;
