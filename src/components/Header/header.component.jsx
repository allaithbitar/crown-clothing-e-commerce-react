import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, showCart }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-contianer">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : null}
        <CartIcon />
      </div>
      {showCart ? <CartDropDown /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  showCart: state.cart.hidden,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
