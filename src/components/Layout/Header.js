import  { Fragment } from 'react'
import MealImage from '../../assets/secondMeal.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
function Header(props) {
  return <Fragment>
    <header className={classes.header}>
      <h1>Food Corner</h1>
      <HeaderCartButton onClickButton={props.onShowCart} />

    </header>
    <div className={classes['main-image']}>
      <img src={MealImage} alt="our machine" />
    </div>
  </Fragment>
}

export default Header