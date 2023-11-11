import VisualNav from "@/components/VisualNav";

export default function Contact() {
  return (
    <>
      <section className="mx-auto px-4 pt-10 md:pt-0 pb-32 md:pb-0 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg max-h-full w-full text-secondary text-center font-bold">
        <div className="flex md:absolute left-10 pb-10 md:pt-0 justify-center md:hidden">
          <VisualNav></VisualNav>
        </div>
        <h2 className="text-4xl">Contact</h2>
        <span className="text-lg">お問い合わせ</span>
        <div className="flex pt-14 pb-5 justify-center items-center">
          <p>以下からお問い合わせください！</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="ml-1 w-4 h-4 fill-primary"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg>
          {/* Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgYjXkR0EO82ozNScnsHs21Efq4xpXT2RQ3jKwCFSNAMwekw/viewform" target="_blank" rel="noreferrer">
        <button className="py-2 px-6 border border-primary rounded text-2xl transition-all hover:text-white hover:bg-primary">Contact Me！</button>
        </a>
        <p className="mt-5">SNSからの連絡もお待ちしております</p>
      </section>
    </>
  );
}
