import React from "react";

import "./custom-button.styles.scss";

interface OtherProps {
  children?: any;
  type?: "button" | "submit"
  onClick?: any;
  isGoogleSignIn?: any;
  inverted?: any;
//  add more button options (props) here so they can be used in CustomButton
}

const CustomButton = (props: OtherProps) => {
  const { children, isGoogleSignIn, inverted, ...otherProps } = props;
  return (
    <button className={`${inverted ? "inverted": ""}${isGoogleSignIn ? "google-sign-in": ""} custom-button`}{...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
