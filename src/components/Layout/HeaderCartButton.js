import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const [btnIsHightlighted, setBtnIsHighlighted] = useState(false);
  const contextObj = useContext(CartContext);
  const {items} = contextObj;

  //this reduce method accept 2 args 1 is a func ,2 is starting value
  const numberOfItems = contextObj.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);



  /*WHENEVER THE CONTEXT CHANGES REACT REVALUATES THE BUTTON COMPONENT */
  const btnAnimation = `${classes.button} ${btnIsHightlighted ? classes.bump : ''}`;


  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);


    //cleanup function for ongoing after nothing is there
    return () => {
      clearTimeout(timer);
    }
  }, [items]);


  return (
    <button className={btnAnimation} onClick={props.onClickButton}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart!</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
