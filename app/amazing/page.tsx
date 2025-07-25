import Link from "next/link";

export default function AmazingPage() {
  return (
    <main>
      <h1>NextJS Is Amazing!</h1>
      <Link href={"/amazing/approach"}>i use this approach for this app!</Link>
    </main>
  );
}
