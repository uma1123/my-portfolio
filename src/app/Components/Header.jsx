import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/about" scroll={false}>
              About
            </Link>
          </li>
          <li>
            <Link href="/Portfolio" scroll={false}>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
