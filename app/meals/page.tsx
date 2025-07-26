import Link from "next/link";

const page = () => {
  return (
    <main>
      <h1>meals page</h1>
      meals:{" "}
      {["pizza", "pineapple", "burger", "chiken"].map((food) => (
        <div key={food}>
          <Link
            style={{
              color: "white",
              // fontSize: "30px",
            }}
            href={`/meals/${food}`}
          >
            {food}
          </Link>
        </div>
      ))}
      <Link
        href="/meals/share"
        style={{
          color: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
        }}
      >
        share our foods!
      </Link>
      <Link
        href="/community"
        style={{
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          fontSize: "30px",
        }}
      >
        join in our community!
      </Link>
    </main>
  );
};

export default page;
