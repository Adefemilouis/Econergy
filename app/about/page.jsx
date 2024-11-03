"use client"
import Image from "next/image"
import ant from "/public/image/ant.jpg"

import Header from "@/components/ui/Header"

import Fat from "@/components/ui/about/fat"
import Form from "@/components/ui/how it work/form"
import Freed from "@/components/ui/freed"



const page = () => {
  return (
    <>
    <Header />
    <section className="pt-20">
      <div className="flex flex-col-2 my-24">
        <div className="bg-slate-500 mr-8 pr-16">
          <Image src={ant} alt="alt" width={998} height={400} className="mt-8 "/>
        </div>
        <div className="mr-24">
          <h1 className="h2 text-white">Our mission is to make<br/> it easy and inexpensive<br/> for organizations to choose renewable<br/> energy</h1>
        </div>
      </div>
      <Fat/>
      <Form/>
      <Freed/>
    </section>
    </>
  )
}

export default page
