import classes from '../Meals/MealsSummary.module.css';
const MealsSummary = () => {

  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        choose your favorite meal from our board selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-equality ingredients, just-in-time
        and of couirse by expereinced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
