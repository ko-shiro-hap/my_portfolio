import VisualNav from "@/components/VisualNav";

export default function Home() {
  return (
    <>
      <section className="relative w-full">
        <div className="flex md:absolute left-10 md:left-11 pt-10 md:pt-0 justify-center">
          <VisualNav></VisualNav>
        </div>
        <div className="mt-10 md:mt-0 text-center md:text-right text-secondary font-bold">
          <h2 className="pb-10 text-8xl xl:text-9xl">HELLO<br/>WORLD</h2>
          <p className="text-2xl md:text-3xl xl:text-4xl md:leading-relaxed">My name is <span className="text-4xl md:text-5xl text-stroke">Koshiro Iino</span>.
          <br />
          I offer the best value in my engineering.</p>
        </div>
      </section>
    </>
  );
}

