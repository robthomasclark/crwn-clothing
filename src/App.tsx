import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { MasterState } from "./types/states";
import "./App.css";

class App extends React.Component<{ setCurrentUser: any; currentUser: any }> {
  //this should really be a function, but, I'm being lazy in not defining
  //it since I cannot figure out exactly what the signature is from a third party library
  unsubscribeFromAuth: any = null;
  unsubscribeFromSnapShot: any = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //this.setState({ currentUser: user });
      //console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});
        this.unsubscribeFromSnapShot = userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapShot();
    //console.log("unmounted");
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: MasterState) => {
  return { currentUser: state.user.currentUser };
};

const mapDispatchToProps = (dispatch: any) => {
  return { setCurrentUser: (user: any) => dispatch(setCurrentUser(user)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
