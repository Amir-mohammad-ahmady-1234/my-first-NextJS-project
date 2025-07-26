import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <Link href="meals">
        <p>meals page</p>
      </Link>
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
}
