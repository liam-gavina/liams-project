import Link from "next/link"
import { GiPinata } from "react-icons/gi";
import {IoLogoGithub} from 'react-icons/io5'
 function NavBar ( {children}){
    return (
        <nav className="px-4 py-4">
            <ul className="flex items-center justify-between">
                <li><Link className="font-medium text-brown-600" href="/">
                          <figure className="flex items-center gap-1 text-orange-950">
                            <GiPinata className="w-10 h-10 "/>
                            <figcaption className="text-xs md:text-xl">Llamaste</figcaption>
                          </figure>
                    </Link></li>
                <li><Link className="text-sm font-medium text-slate-900 md:text-xl md:pr-20 hover:text-slate-600" href="/llamas">Access the Llama Catalog!</Link></li>
                <li><Link className="font-medium text-blue-600" href="https://github.com/liam-gavina/liams-project">
                       <IoLogoGithub className="w-10 h-10 text-gray-500" />
                    </Link></li>
            </ul>
        </nav>
    )
 }



 export {NavBar}