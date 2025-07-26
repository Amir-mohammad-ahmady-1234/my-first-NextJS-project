import { NextPage } from "next";

interface Props {
  params: { slug: string };
}

const page: NextPage<Props> = ({ params }) => {
  return (
    <div style={{ margin: "200px", fontSize: "50px" }}>
      food name: {params.slug}
    </div>
  );
};

export default page;
