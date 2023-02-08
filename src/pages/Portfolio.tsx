import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <section className="mx-auto px-4 pt-10 lg:pt-0 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg max-h-full w-full text-secondary">
        <h2 className="text-4xl font-bold">Portfolio</h2>
        <span className="text-lg font-bold">制作物</span>
        <div className="mx-auto px-4 pt-10 max-w-screen-sm xl:max-w-screen-md w-full">
          <div>
            <div className="relative w-full h-48 mx:h-64 sm:h-72 md:h-80 lg:h-96 xl:h-105 border border-primary">
              <Image src="/images/portfolio_site.png" fill alt="portfolio" className="w-full object-contain rounded"/>
            </div>
              <h3>Koshiro’s_Portfolio</h3>
              <div>
                <h4>CATEGORY</h4>
                <ul>
                  <li>Front-end</li>
                  <li>Design</li>
                </ul>
              </div>
              <div>
                <h4>TAG</h4>
                <ul>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwindcss</li>
                  <li>AWS</li>
                </ul>
              </div>
              <button>In More Detail</button>
          </div>
        </div>
      </section>
    </>
  );
}
