import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto px-4 lg:max-w-screen-md xl:max-w-screen-lg w-full text-center text-primary">
      <div className="py-5 border-t border-primary">
        <p className="font-bold">Koshiro’s_Portfolio</p>
        <small>&copy; 2023 Koshiro Iino</small>
      </div>
    </footer>
  )
}

export default Footer;
