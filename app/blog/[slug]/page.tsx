import { NextPage } from "next";

interface Props {
  params: { slug: string };
}

const page: NextPage<Props> = ({ params }) => {
  return (
    <main>
      <p>blog post</p>
      <p>{params.slug}</p>
    </main>
  );
};

export default page;
