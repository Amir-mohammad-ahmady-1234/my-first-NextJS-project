import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="a plate with food on it." priority />
        NextLevel food
      </Link>

      <nav className={classes.nav}>
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
