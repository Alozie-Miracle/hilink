import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Sidebar = ({ setToggle }: { setToggle: any }) => {
    return (
        <div className='h-full w-1/2 bg-white p-5 flex flex-col gap-5'>
            <Link href="/">
                <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
            </Link>

            <ul className="flex flex-col h-full gap-10 ">
              {NAV_LINKS.map((link) => (
                <p onClick={() => setToggle(false)} key={link.key} className=" text-gray-50 cursor-pointer pb-1.5 transition-all hover:text-green-500 text-sm">
                  {link.label}
                </p>
              ))}
            </ul>
        </div>
    )
}

export default Sidebar