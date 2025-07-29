"use server";

import { MealType } from "@/types/mealType";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

function isInvalidText(text: string | File | null) {
  if (typeof text !== "string") return;
  return !text || text.trim() === "";
}

export async function shareMeal(formData: FormData) {
  const data = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(data.title) ||
    isInvalidText(data.summary) ||
    isInvalidText(data.instructions) ||
    isInvalidText(data.image) ||
    isInvalidText(data.creator) ||
    isInvalidText(data.creator_email) ||
    (typeof data.creator_email === "string" &&
      !data.creator_email.includes("@")) ||
    !(data.image instanceof File) ||
    data.image.size === 0
  ) {
    throw new Error("invalid input");
  }

  await saveMeal(data as MealType);
  redirect("/meals");
}
