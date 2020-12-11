import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { Item } from "../../types/item";
import "./menu-item.styles.scss";

//setup to be able to use withRouter. This is required to get the histoty
type RouterProps = {
  title: string;
};

//add the specific properties here.
interface MenuItemProps extends RouteComponentProps<RouterProps> {
  item: Item;
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <div
      className={`${props.item.size} menu-item`}
      onClick={() => {
        props.history.push(`${props.match.url}${props.item.linkUrl}`);
      }}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${props.item.imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{props.item.title.toUpperCase()}</h1>
        <span className="subtitle">SHOW NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
