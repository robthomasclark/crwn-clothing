import React from "react";
import { connect } from "react-redux";

import { Item } from "../../types/item";
import { MasterState } from "../../types/states";
import { selectDirectorySections } from "../../redux/directory/directory.selectors"
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

interface Props {
  sections: Item[];
}

const Directory = (props: Props) => {
  return (
    <div className="directory-menu">
      {props.sections.map((item) => {
        return <MenuItem key={item.id} item={item}></MenuItem>;
      })}
    </div>
  );
};

const mapStateToProps = (state: MasterState) => {
  return { sections: selectDirectorySections(state) };
};

export default connect(mapStateToProps)(Directory);
