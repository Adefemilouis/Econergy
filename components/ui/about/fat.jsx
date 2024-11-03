"use client"

import Image from "next/image"
import map from "/public/image/map.png"

const Fat = () => {
  return (
    <section className="bg-get py-28 ">
        <div className="text-center">
        <h1 className="h1 text-accent text-center my-10">OUR STORY</h1>
        <h3 className="h1 text-primary my-8">Econergy is a sustainability and renewable energy company<br/> working across the United States. As innovators in the energy<br/> industry, we offer tailored solutions that leverage renewable<br/> options to create economically beneficial outcomes for our partners.</h3>
        <h3 className="h3 text-greet my-6">We facilitate the transition to green energy, resulting in increased cost savings<br/> through the buying power that is uniquely enabled by the development of<br/> renewable assets. We strive for more stable budgets, increased options and unique<br/> programs designed to provide maximum benefits to our customers and partners.</h3>
      
        </div>
          <div className="mt-72 mb-16">
          <h1 className="h1 text-center text-accent">WHERE WE WORK</h1>
          <h3 className="h3 text-center text-greet my-14">We are rapidly expanding across the United States.
          </h3>

          <Image src={map} alt="alt" width={1000} height={1000} className="m-w-[900px] m-h-[400px] w-full" />
        </div>
    </section>
  )
}

export default Fat
