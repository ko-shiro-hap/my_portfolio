import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Home({ formattedDate } : { formattedDate: string }) {
  return (
    <>
      <section className="relative w-full">
        <div className="hidden md:block absolute left-10">
          <nav className="relative w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 text-3xl lg:text-4xl font-bold border border-primary rounded-full transition-all hover:scale-110">
            <div className="absolute top-1/2 left-1/2 w-12 h-12 lg:w-20 lg:h-20 xl:w-28 xl:h-28 border border-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
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
        </div>
        <div className="text-right text-secondary font-bold">
          <h2 className="pb-10 text-8xl xl:text-9xl">HELLO<br/>WORLD</h2>
          <p className="text-2xl md:text-3xl xl:text-4xl md:leading-relaxed">My name is <span className="text-4xl md:text-5xl text-stroke">Koshiro Iino</span>.
          <br />
          I offer the best value in my engineering.</p>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}
