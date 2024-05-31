import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isSixCharacters = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [fromInputIsValid, setFormInputIsValid] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameValid = !isEmpty(enteredName);
    const postalCodeIsValid = isSixCharacters(enteredPostal);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputIsValid({
      name: enteredNameValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: postalCodeIsValid,
    });

    const formIsValid =
      enteredNameValid &&
      postalCodeIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name:enteredName,
      street:enteredStreet,
      enteredPostal:enteredPostal,
      city:enteredCity
    });
  };

  /* these are validated classes if any of the input is blank */
  const nameControlClass = `${classes.control} ${
    fromInputIsValid.name ? "" : classes.invalid
  }`;
  const streetControlClass = `${classes.control} ${
    fromInputIsValid.street ? "" : classes.invalid
  }`;
  const postalCodeControlClass = `${classes.control} ${
    fromInputIsValid.name ? "" : classes.invalid
  }`;
  const cityControlClass = `${classes.control} ${
    fromInputIsValid.name ? "" : classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!fromInputIsValid.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!fromInputIsValid.street && <p>Please enter a valid street name!</p>}
      </div>
      <div className={postalCodeControlClass}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!fromInputIsValid.postalCode && (
          <p>Please enter a valid postal code!</p>
        )}
      </div>
      <div className={cityControlClass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!fromInputIsValid.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm </button>
      </div>
    </form>
  );
};
export default Checkout;
