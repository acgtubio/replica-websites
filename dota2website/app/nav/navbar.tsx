import navbarStyles from "./navbar.module.css";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className={`${navbarStyles.main_style}`}>
      <Link href="/" className={`${navbarStyles.page_title} ${navbarStyles.page_title_size}`} />
      <ul className={`${navbarStyles.nav_tabs}`}>
        <li>
          <Link href="/heroes">HEROES</Link>
        </li>
        <li>
          <Link href="#">NEWS</Link>
        </li>
        <li>
          <Link href="#">ESPORTS</Link>
        </li>
      </ul>
    </nav>
  )
}