import React, { BaseSyntheticEvent } from "react";

import "./signin.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

type State = {
  email: string;
  password: string;
};

class SignIn extends React.Component {
  state: State = { email: "", password: "" };

  handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event: BaseSyntheticEvent) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="EMAIL"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="PASSWORD"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
