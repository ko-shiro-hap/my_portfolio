import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="pl-10">
      <div className="h-full w-0.25 bg-primary"></div>
      <ul className="top-0">
        <li>
          <Link href="https://github.com/ko-shiro-hap">
            <Image src="/images/github.svg" width={40} height={40} alt="github"/>
          </Link>
        </li>
        <li>
          <Link href="/">
          <Image src="/images/instagram.svg" width={40} height={40} alt="instagram"/>
          </Link>
        </li>
        <li>
          <Link href="/">
          <Image src="/images/twitter.svg" width={40} height={40} alt="twitter"/>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
