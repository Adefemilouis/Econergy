"use client"

import Image from "next/image"
import logo from "/public/image/logo.png"
import Socials from "./socials"



const Freed = () => {
  return (
   <section className='p-6'>
     <div className="flex flex-col-4 my-8 mx-20">
        <div className="mx-10">
            <Image src={logo} alt="alt" width={100} height={100} className="ml-16" />
            <h2 className="h2 text-accent">eco<span className="text-white/100">nergy</span></h2>
            <p className="p text-center mt-6 text-white/100">1720 West Division st.<br/> chicago,II. 60622</p>
           <div className="mx-12 my-6">
           <Socials className="" containerStyles="flex gap-6" iconStyles="w-12 h-12 border border-accent  flex justify-center items-center text-primary bg-accent text-base hover:bg-primary hover:text-accent hover:transition-all duration-500"
        />
           </div>
        </div>
        <div className="mx-12 my-5 text-center">
            <h2 className="h3 text-white/100">HOW IT WORKS</h2>
            <h3 className="h3 text-get my-6">Our Model</h3>
            <h3 className="h3 text-get my-6">Coalitions</h3>
            <h3 className="h3 text-get my-6">Get Started</h3>
        </div>
        <div className="mx-12 my-5 text-center">
            <h3 className="h3 text-white/100">PARTNERS</h3>
            <h3 className="h3 text-get my-6">Future green Energy</h3>
            <h3 className="h3 text-get my-6">Consortium</h3>
            <h3 className="h3 text-get my-6">Partners</h3>
            <h3 className="h3 text-get my-6">Join a Coalition</h3>
        </div>
        <div className="ml-20 my-5 text-center">
            <h3 className="h3 text-white/100">ABOUT US</h3>
            <h3 className="h3 text-get my-6">Our Story</h3>
            <h3 className="h3 text-get my-6">Contact</h3>

        </div>

       


     </div>
     <footer className="text-white mx-10 ">© 2024 Econergy</footer>  
     

   </section>
   
  )
}

export default Freed
