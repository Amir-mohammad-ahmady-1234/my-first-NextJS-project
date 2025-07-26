import { NextPage } from "next";

interface Props {
  params: { mealSlug: string };
}

const MealDetailsPage: NextPage<Props> = ({ params }) => {
  return (
    <div style={{ margin: "200px", fontSize: "50px" }}>
      food name: {params.mealSlug}
    </div>
  );
};

export default MealDetailsPage;
