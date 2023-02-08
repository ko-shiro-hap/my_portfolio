import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link href="/">
            <Image src="/images/github.svg" width={40} height={40} alt="github"/>
          </Link>
        </li>
        <li>
          <Link href="/">
          <Image src="/images/instagram.svg" width={40} height={40} alt="github"/>
          </Link>
        </li>
        <li>
          <Link href="/">
          <Image src="/images/twitter.svg" width={40} height={40} alt="github"/>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
