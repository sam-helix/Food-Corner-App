import React from "react";
import icongif from "../../assets/shopping-cart.gif";
import classes from "../Cart/CartIcon.module.css";
function CartIcon() {
  return <img className={classes.mycart} src={icongif} alt="" />;
}

export default CartIcon;

