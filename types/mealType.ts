export interface MealType {
  id: number;
  title: string;
  slug: string;
  image: File | string;
  summary: string;
  creator: string;
  instructions: string;
  creator_email: string;
}

