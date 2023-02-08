import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Home({ formattedDate } : { formattedDate: string }) {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
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
