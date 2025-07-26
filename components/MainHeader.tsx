import logoImg from "@/assets/logo.png";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="a plate with food on it." />
        NextLevel food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">browse Meals</Link>
          </li>
          <li>
            <Link href="/community">foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
