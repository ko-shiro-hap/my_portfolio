import VisualNav from "@/components/VisualNav";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { client } from "../../libs/client";

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "portfolio" });
  const categoriesData = await client.get({ endpoint: "categories" });
  const tagsData = await client.get({ endpoint: "tags" });

  return {
    props: {
      portfolios: data.contents || null,
      categories: categoriesData.contents || null,
      tags: tagsData.contents || null
    },
  };
};

export default function Portfolio({portfolios, categories, tags}: any) {
  return (
    <>
      <section className="mx-auto px-4 pt-10 md:pt-24 pb-20 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg max-h-full w-full text-primary">
        <div className="flex md:absolute left-10 pb-10 md:pt-0 justify-center md:hidden">
          <VisualNav></VisualNav>
        </div>

        <h2 className="text-4xl font-bold">Portfolio</h2>
        <span className="text-lg font-bold">制作物</span>
        {portfolios.map((portfolio: any) => {
          return (
              <div className="mx-auto px-4 pt-4 pb-16 max-w-screen-sm xl:max-w-screen-md w-full" key={portfolio.id}>
                <div className="relative w-full h-48 mx:h-64 sm:h-72 md:h-80 lg:h-96 xl:h-105 transition-all hover:opacity-50">
                  <Link href={portfolio.url} target="_blank">
                    <ExportedImage src={portfolio.image.url} fill alt="portfolio" className="w-full object-contain rounded"/>
                  </Link>
                </div>
                <h3 className="sm:hidden mt-1 text-xl lg:text-2xl xl:text-3xl text-center font-bold">{portfolio.name}</h3>
                <div className="hidden sm:flex gap-1 sm:gap-10 pt-3 items-start font-bold flex-col sm:flex-row">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl">{portfolio.name}</h3>
                  <div>
                    <h4 className="lg:text-xl">CATEGORY</h4>
                    <ul className="flex gap-1 text-white flex-wrap">
                      {portfolio.categories.map((category: any) => {
                        return (
                          <li className="px-1 bg-primary" key={category.id}>{category.name}</li>
                        )
                      })}
                    </ul>
                  </div>
                  <div>
                    <h4 className="lg:text-xl">TAG</h4>
                    <ul className="flex gap-1 flex-wrap">
                      {portfolio.tags.map((tag: any) => {
                        return (
                          <li className="px-1 bg-white border border-primary" key={tag.id}>{tag.name}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                  <Link href={portfolio.qiita_url} target="_blank">
                    <div className="flex md:mt-0 py-1 items-end transition-all hover:underline justify-center sm:justify-start">
                      <div className="mr-0.5 w-0.5 h-5 bg-primary"></div>
                      <div className="mr-1 w-0.25 h-4 bg-primary"></div>
                      <p className="lg:text-xl sm:font-bold leading-none lg:-mb-1">In More Detail</p>
                    </div>
                  </Link>
              </div>
          )
        })}
      </section>
    </>
  );
}
