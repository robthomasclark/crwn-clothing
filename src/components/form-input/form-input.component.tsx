import React, { BaseSyntheticEvent } from "react";

import "./form-input.styles.scss";

type handleFunction = (event: BaseSyntheticEvent) => void;

interface OtherProps {
  handleChange: handleFunction;
  label?: string;
  name?: string;
  type?: string;
  value?: string;
  required?: any;
}

const FormInput = (props: OtherProps) => {
  const { handleChange, label, ...otherProps } = props;
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value && otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
