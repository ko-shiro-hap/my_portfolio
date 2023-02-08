import Link from "next/link";

const Header = () => {
  return (
    <header className="flex px-10 py-8 w-screen justify-between items-end text-primary font-bold">
      <h1 className="text-3xl">Koshiro’s_Portfolio</h1>
      <nav>
        <ul className="flex gap-5 text-xl">
          <li>
            <Link href="/">Profile</Link>
          </li>
          <li>
            <Link href="/">Experience</Link>
          </li>
          <li>
            <Link href="/">Portfolio</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
