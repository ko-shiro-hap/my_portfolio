import Link from "next/link";

const Header = () => {
  return (
    <header className="flex px-4 md:px-10 py-8 w-screen justify-between items-end text-primary">
      <Link href="/">
        <h1 className="text-3xl font-bold">Koshiro’s_Portfolio</h1>
      </Link>
      <div className="relative md:hidden w-10 h-10 border border-primary rounded-full cursor-pointer transition-all hover:scale-110">
        <div className="absolute top-1/2 left-1/2 w-3 h-3 border border-primary rounded-full transform transition-all -translate-x-1/2 -translate-y-1/2 hover:bg-primary"></div>
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-5 text-xl font-medium">
          <li>
            <Link href="/profile" className="hover:underline">Profile</Link>
          </li>
          <li>
            <Link href="/experience" className="hover:underline">Experience</Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:underline">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
