import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { MealType } from "@/types/mealType";
import { notFound } from "next/navigation";

async function MealDetailsPage({
  params,
}: {
  params: Promise<{ mealSlug: string }>;
}) {
  const { mealSlug } = await params;

  const meal = (await getMeal(mealSlug)) as MealType;

  if (!meal) notFound();

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={
              typeof meal.image === "string" ? meal.image : "/image/pizza.png"
            }
            alt={meal.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: `${meal.instructions}` }}
        ></p>
      </main>
    </>
  );
}

export default MealDetailsPage;
