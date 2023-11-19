import Link from "next/link"
import {IoBonfire} from 'react-icons/io5'
import {IoLogoGithub} from 'react-icons/io5'
 function NavBar ( {children}){
    return (
        <nav className="px-4 py-4 ">
            <ul className="flex items-center justify-between gap-x-8">
                <li><Link className="font-medium text-rose-600" href="/">
                          <figure className="flex items-center gap-1 text-red-500">
                            <IoBonfire className="w-6 h-6 "/>
                            <figcaption className="text-sm">Llamaste</figcaption>
                          </figure>
                    </Link></li>
                <li><Link className="font-medium text-blue-600" href="/llamas">Llamas</Link></li>
                <li><Link className="font-medium text-blue-600" href="/llama">
                       <IoLogoGithub className="w-6 h-6 text-gray-500" />
                    </Link></li>
            </ul>
        </nav>
    )
 }



 export {NavBar}