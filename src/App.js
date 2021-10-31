import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch, Redirect } from "react-router";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/Header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-and-sign-up.component";
import { Component } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "@firebase/firestore";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuthObj) => {
      console.log(userAuthObj);
      if (userAuthObj) {
        const userRef = await createUserProfileDocument(userAuthObj);
        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuthObj);
      }
    });
  }
  componentWillUnmount() {
    auth.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
