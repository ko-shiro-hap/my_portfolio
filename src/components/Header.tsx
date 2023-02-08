import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-screen text-primary font-bold">
      <div className="flex px-10 py-8 justify-between items-end">
        <h1 className="text-3xl">Koshiro’s Portfolio</h1>
        <nav className="flex gap-5 text-xl">
          <Link href="/">Profile</Link>
          <Link href="/">Experience</Link>
          <Link href="/">Portfolio</Link>
          <Link href="/">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;
