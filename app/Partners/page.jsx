"use client"

import Freed from "@/components/ui/freed"
import Header from "@/components/ui/Header"
import Form from "@/components/ui/wtf/form"
import Green from "@/components/ui/partner/green"
import Photo from "@/components/ui/photo"

const Page = () => {
  return (
    <>
    <Header />
    <section className="py-10">
      <div className="flex flex-col-2">
        <div className="">
        <h1 className="h1  ml-7  text-white/100  mt-96 xl:mt-96  relative z-10 ">Our pioneering model enables our<br /> partners to bring affordables renewable <br/>energy to their members</h1>
        </div>
        <div className="">
          <Photo/>
        </div>
      </div>
      
     
    </section>
    <Green/>
    <Form/>
    <Freed/>
    </>
  )
}

export default Page
