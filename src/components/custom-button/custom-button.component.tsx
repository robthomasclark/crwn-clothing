import React from "react";

import "./custom-button.styles.scss";

interface OtherProps {
  children?: any;
  type?: "button" | "submit"
  onClick?: any;
  isGoogleSignIn?: any;
//  add more button options (props) here so they can be used in CustomButton
}

const CustomButton = (props: OtherProps) => {
  const { children, isGoogleSignIn, ...otherProps } = props;
  return (
    <button className={`${isGoogleSignIn ? "google-sign-in": ""} custom-button`}{...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
