import React, { BaseSyntheticEvent } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./signup.styles.scss";

type State = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

class SignUp extends React.Component {
  state: State = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (user) {
        await createUserProfileDocument(user, { displayName });
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event: BaseSyntheticEvent) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="DISPLAY NAME"
            name="displayName"
            type="text"
            value={this.state.displayName}
            handleChange={this.handleChange}
            required
          />
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
          <FormInput
            label="CONFIRM PASSWORD"
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
