import Link from "next/link"
import { GiPinata } from "react-icons/gi";
import {IoLogoGithub} from 'react-icons/io5'
 function NavBar ( {children}) {
    return (
        <nav className="px-4 py-4 ">
            <ul className="flex items-center justify-between ">
                <li><Link className="font-medium text-orange-600" href="/">
                          <figure className="flex items-center gap-1 text-orange-600">
                            <GiPinata className="w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 "/>
                            <figcaption className="font-bold md:text-xl lg:text-2xl hover:font-extrabold">Llamaste</figcaption>
                          </figure>
                    </Link></li>
                <li><Link className="text-sm font-medium text-slate-900 md:text-xl hover:text-slate-900 hover:font-bold relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/llamas">Access the Llama Catalog!</Link></li>
                <li><Link className="font-medium text-orange-600" href="https://github.com/liam-gavina/liams-project">
                       <IoLogoGithub className="w-8 h-8 md:h-10 md:w-10 lg:h-16 lg:w-16" />
                    </Link></li>
            </ul>
        </nav>
    )
 }



 export {NavBar}