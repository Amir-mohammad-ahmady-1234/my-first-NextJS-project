"use server";

import { MealType } from "@/types/mealType";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

export async function shareMeal(formData: FormData) {
  const data = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(data as MealType);
  redirect("/meals");
}
