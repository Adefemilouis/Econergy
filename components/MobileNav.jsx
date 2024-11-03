"use client"

import { Sheet, SheetContent, SheetTrigger }  from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries }  from "react-icons/ci";


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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
     <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>

    </Sheet>
  )
}

export default MobileNav
