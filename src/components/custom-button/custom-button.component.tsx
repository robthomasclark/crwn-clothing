import React from "react";

import "./custom-button.styles.scss";

interface OtherProps {
  children?: any;
  type?: "button" | "submit"
//  add more button options (props) here so they can be used in CustomButton
}

const CustomButton = (props: OtherProps) => {
  const { children, ...otherProps } = props;
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
