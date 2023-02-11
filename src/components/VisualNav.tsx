import Link from "next/link";

const VisualNav = () => {
  return (
    <nav className="relative w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 text-3xl lg:text-4xl font-bold border border-primary rounded-full transition-all hover:scale-110">
      <Link href="/">
        <div className="absolute top-1/2 left-1/2 w-12 h-12 lg:w-20 lg:h-20 xl:w-28 xl:h-28 border border-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </Link>
      <div className="absolute top-1/6 -left-10 py-2 bg-white rounded-full">
        <Link href="/profile" className="text-stroke transition-all hover:text-primary hover:text-4xl lg:hover:text-5xl">Profile</Link>
      </div>
      <div className="absolute top-1/6 left-36 lg:left-48 xl:left-62 py-2 bg-white rounded-full">
        <Link href="/experience" className="text-stroke transition-all hover:text-primary hover:text-4xl lg:hover:text-5xl">Experience</Link>
      </div>
      <div className="absolute bottom-1/6 -left-10 py-2 bg-white rounded-full">
        <Link href="portfolio" className="text-stroke transition-all hover:text-primary hover:text-4xl lg:hover:text-5xl">Portfolio</Link>
      </div>
      <div className="absolute bottom-1/6 left-36 lg:left-48 xl:left-62 py-2 bg-white rounded-full">
        <Link href="contact" className="text-stroke transition-all hover:text-primary hover:text-4xl lg:hover:text-5xl">Contact</Link>
      </div>
    </nav>
  )
}

export default VisualNav;
