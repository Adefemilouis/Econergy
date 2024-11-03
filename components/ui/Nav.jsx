"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from 'react'

const links = [
    {
        name: "How it works",
        path: "/how"
    },
    {
        name: "Partners",
        path: "/Partners"
    },
    {
        name: "About ",
        path: "/about"
    },
   
];

// const Nav = () => {
//     const pathname = usePathname() ;
//      return (
//    <nav className="flex gap-8">
//     {links.map((link, index) => {
//         return (
//             <Link href={link.path} key={index} className={`${link.path === pathname && "text-white border-b-2 border-primary" } capitalize font-medium hover:text-accent transition-all`}>
//            {link.name}
//             </Link>
//         )
//     })}

//    </nav>
//   )
// }


const Nav = () => {




    const pathname = usePathname();
    return(
        <nav className='flex gap-10'>
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${
                        link.path === pathname && "text-accent border-b-2 border-accent"
                    } capitalize font-medium hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Nav
