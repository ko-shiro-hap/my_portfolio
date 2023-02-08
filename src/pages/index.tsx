import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Home({ formattedDate } : { formattedDate: string }) {
  return (
    <>
      <section className="w-full">
        <nav>
          <Link href="">Profile</Link>
          <Link href="">Experience</Link>
          <Link href="">Portfolio</Link>
          <Link href="">Contact</Link>
        </nav>
        <div className="text-right text-secondary">
          <h2>Hello<br/>World</h2>
          <p>My name is <span>Koshiro Iino</span>.
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
