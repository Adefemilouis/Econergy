"use client"

import Image from "next/image"
import sec from "/public/image/sec.jpg"
import set from "/public/image/set.jpg"
import { Button } from "./button"


const How = () => {
  return (
    <section className="bg-get xl:p-12 xl:px-20">
        <h1 className="h1 text-accent text-center">How it Works</h1>
    <h1 className="h2 text-center xl:my-10 text-primary">We build energy coalitions that unlock <br/>access to renewable energy savings</h1>
   
   <div className="flex xl:flex-col-2 xl:mx-12">
    <div className="text-center">
   <Image src={sec} alt="alt" width={900} height={500} />
   <h1 className="h1 text-primary xl:my-10">Join an existing energy coalition</h1>
   <h3 className="h3 xl:my-10">See our complete list of <span className="text-primary">existing energy coalitions,</span> <br/> and get started today.

</h3>
<button className="bg-primary p-6 text-white ">
    <h3>Join an Energy Coalition</h3>
</button>
    </div>
    <div className="xl:ml-20 mb-28 text-center">
    <Image src={set} alt="alt" width={664} height={350} />
   <h1 className="h1 text-primary xl:my-10">Create a new energy coalition</h1>
   <h3 className="h3 xl:my-16">Econergy makes it easy by helping you with our easy set up process.</h3>
   <button className="bg-primary p-6 text-white ">
    <h3>Start a Coalition</h3>
    </button>
    </div>
    
   </div>
   
    </section>
  )
}

export default How
