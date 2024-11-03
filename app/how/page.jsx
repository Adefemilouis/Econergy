"use client"

import Header from "@/components/ui/Header"
import how from '/public/image/how.jpg'
import Image from "next/image"
import Jass from "@/components/ui/how it work/jass"
import Coal from "@/components/ui/how it work/coal"
import Form from "@/components/ui/how it work/form"
import Freed from "@/components/ui/freed"

const Services = () => {
  return (
    <>    <Header/>
    
     <section className="">
     
      <div className="flex flex-col-2 py-40 my-6">
        <div className="my-">
          <Image src={how} alt="alt" width={790} height={890} />
        </div>
        <div className="mx-14">
          <h2 className="h2 mt-56 text-white/100">We help organizations<br/> collaborate on a<br/> renewable energy<br/> program that enables<br/> shared savings</h2>
        </div>
      </div>
      <Jass />
      <Coal />
      <Form/>
      <Freed />
     </section>

    </>
  )
}

export default Services
