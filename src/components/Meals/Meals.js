import { Fragment } from "react"
import Available from "./Available"
import MealsSummary from "./MealsSummary"


//* rendering element side by side is not possible in JSX
const Meals = () => {
    /* ... I use this framgment as wrapper here because 
     !i have to render 2 elements side by side */
    return <Fragment>
        <MealsSummary />
        <Available />
    </Fragment>
}

export default Meals