import VisualNav from "@/components/VisualNav";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client";

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "portfolio" });

  return {
    props: {
      portfolio: data.contents || null,
    },
  };
};

export default function Portfolio({portfolio}: any) {
  return (
    <>
      <section className="mx-auto px-4 pt-10 lg:pt-0 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg max-h-full w-full text-primary">
        <div className="flex md:absolute left-10 pb-10 md:pt-0 justify-center md:hidden">
          <VisualNav></VisualNav>
        </div>

        <h2 className="text-4xl font-bold">Portfolio</h2>
        <span className="text-lg font-bold">制作物</span>
        {/* 制作物が増えたら繰り返す */}
        <div className="mx-auto px-4 pt-10 max-w-screen-sm xl:max-w-screen-md w-full">
          <div>
            <div className="relative w-full h-48 mx:h-64 sm:h-72 md:h-80 lg:h-96 xl:h-105 border border-primary transition-all hover:opacity-50">
              <Link href="https://qiita.com/ko-shiro-hap/items/0ee1e929128ea39694af">
                <Image src={portfolio[0].image.url} fill alt="portfolio" className="w-full object-contain rounded"/>
              </Link>
            </div>
            <div className="flex gap-1 pt-3 justify-between items-start font-bold flex-col md:flex-row">
              <h3 className="text-xl lg:text-2xl xl:text-3xl">{portfolio[0].name}</h3>
              <div>
                <h4 className="lg:text-xl">CATEGORY</h4>
                <ul className="flex gap-1 text-sm text-white flex-wrap">
                  <li className="px-1 bg-primary">Front-end</li>
                  <li className="px-1 bg-primary">Design</li>
                </ul>
              </div>
              <div>
                <h4 className="lg:text-xl">TAG</h4>
                <ul className="flex gap-1 text-sm flex-wrap">
                  <li className="px-1 bg-white border border-primary">Next.js</li>
                  <li className="px-1 bg-white border border-primary">TypeScript</li>
                  <li className="px-1 bg-white border border-primary">Tailwindcss</li>
                  <li className="px-1 bg-white border border-primary">AWS</li>
                </ul>
              </div>
            </div>
              <Link href={portfolio[0].qiita_url} target="_blank">
                <div className="inline-flex mt-2 md:mt-0 py-1 items-end transition-all hover:underline">
                  <div className="mr-0.5 w-0.5 h-5 bg-primary"></div>
                  <div className="mr-1 w-0.25 h-4 bg-primary"></div>
                  <p className="lg:text-xl font-bold leading-none">In More Detail</p>
                </div>
              </Link>
          </div>
        </div>
        {/* ここまで繰り返す */}
      </section>
    </>
  );
}
