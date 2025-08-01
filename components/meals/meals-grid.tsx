import { MealType } from "@/types/mealType";
import classes from "./meals-grid.module.css";
import MealItem from "./meals-item";

export default function MealsGrid({ meals }: { meals: MealType[] }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
