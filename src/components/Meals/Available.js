import {  useState } from 'react';
import classes from '../Meals/Available.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'


const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const Available = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [meals, setMeals] = useState([]);
  // useEffect(() => {

  //   const fetchMeals = async () => {
  //     const response = await fetch('https://food-37f72-default-rtdb.firebaseio.com/meals.json');
  //     const responseData = await response.json();

  //     const loadedMeals = [];
  //     for (const key in responseData) {
  //       loadedMeals.push({
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price: responseData[key].price
  //       });
  //     }
  //     setMeals(loadedMeals);
  //   }
  //   fetchMeals();
  // }, []);

  // const mealList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  // setIsLoading(false);
  // if (isLoading) {
  //   return <section className={classes.mealsLoading}>
  //     <p >Loading...</p>;
  //   </section>
  // }
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default Available;
