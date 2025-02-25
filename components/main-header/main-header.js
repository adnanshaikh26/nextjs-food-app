import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./navlink";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="Food Plate" priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">People Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
