import VisualNav from "@/components/VisualNav";
import ExportedImage from "next-image-export-optimizer";

export default function Profile() {
  return (
    <>
      <section className="mx-auto px-4 pt-10 lg:pt-0 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg max-h-full w-full text-secondary">
        <div className="flex md:absolute left-10 pb-10 md:pt-0 justify-center md:hidden">
          <VisualNav></VisualNav>
        </div>

        <h2 className="text-4xl font-bold">Profile</h2>
        <span className="text-lg font-bold">私について</span>
        <div className="flex gap-10 xl:gap-20 mx-auto px-4 pt-10 max-w-screen-sm xl:max-w-screen-md w-full flex-col xl:flex-row items-center text-center xl:text-left">
          <div className="relative w-full h-80 xl:w-64 xl:h-64">
            <ExportedImage src="/images/profile.jpg" fill alt="profile" className="object-cover rounded xl:rounded-full"/>
          </div>
          <div>
            <h2 className="text-2xl font-bold leading-none">飯野 功志朗</h2>
            <span className="text-xs">イイノ コウシロウ</span>
            <div className="lg:text-normal flex gap-3 pt-8 flex-col">
              <p>生年月日: 2003年7月24日 19歳</p>
              <p>出身: 東京都八王子市</p>
              <p>学校: 工学院大学 情報学部システム数理学科 1年</p>
              <p>趣味: バイク、ダンス、テニス、音楽鑑賞</p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-10 p-7 max-w-screen-sm xl:max-w-screen-md w-full border border-primary rounded">
          <div className="absolute top-2 left-2 w-3 h-3 bg-primary opacity-25 rounded-full"></div>
          <div className="absolute top-2 right-2 w-3 h-3 bg-primary opacity-25 rounded-full"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 bg-primary opacity-25 rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-primary opacity-25 rounded-full"></div>
          <p className="leading-relaxed">
          見に来てくださりありがとうございます。<br />こちらのサイトは私のポートフォリをサイトとなっております。今までに個人で制作したものや、チームで制作したものを掲載しております。<br />扱った技術や開発で得た知見などを書いているのでぜひご覧ください。
          </p>
        </div>
      </section>
    </>
  );
}
