import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = ({ setToggle }: { setToggle: any }) => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className=" text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold text-sm">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden" >
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={20}
        height={20}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setToggle(true)}
      />
    </nav>
  )
}

export default Navbar