"use client"
import Image from "next/image"
import sec from "/public/image/sec.jpg"
import set from "/public/image/set.jpg"
import site from "/public/image/site.jpg"
import off from "/public/image/off.jpg"
import bat from "/public/image/bat.jpeg"
import dol from "/public/image/dol.jpeg"
import bul from "/public/image/bul.jpeg"
import car from "/public/image/car.jpeg"


const Coal = () => {
  return (
    <section className='bg-frost p-10'>
        <h3 className="h1 text-accent text-center my-12">Coalitions</h3>
        <h1 className="p text-greet text-center my-12">Step 1</h1>

        <h2 className="h1 text-center text-primary mt-16">Establish a coalition or join an existing one</h2>
        <div className="flex flex-col-2 mx-20">
            <div className="my-8">
                <Image src={sec} alt="alt" width={700} height={350} className="mx" />
                <h1 className="h1 text-center text-primary my-8">Join an existing coalition</h1>
                <h3 className="h3 text-center my-6">See our complete list of <span className="text-greet">existing energy coalitions</span>,<br/> and get started today.</h3>
                <button className="h3 text-center text-white/100 bg-greet py-8 px-14 my-8 mx-48">Get Started</button>
            </div>
            <div className="my-8">
                <Image src={set} alt="alt" width={700} height={350} className="mx-8" />
                <h1 className="h1 text-center text-primary my-8">Start a Coalition</h1>
                <h3 className="h3 text-center my-6">Econergy makes it easy by helping you with our easy<br/> set up process.</h3>
                <button className="h3 text-center text-white/100 bg-greet py-8 pr-16 pl-4 my-8 mx-48">Start a coalition</button>
            </div>
        </div>

        <h3 className="p text-greet text-center my-14">Step 2</h3>
        <h1 className="h1 text-center text-primary my-10">Econergy develops renewable energy assets</h1>

        <div className="flex flex-col-2 mx-20">
            <div className="mx-10">
                <Image src={site} alt="alt" width={700} height={350} className="mx-10" />
                <h1 className="h1 text-center my-8">On-site assets</h1>
                <h3 className="h3 text-center">Whether on the ground or on the roof, Econergy will<br/> assess the best options for any interested member.</h3>
            </div>
            <div className="mx-10">
                <Image src={off} alt="alt" width={700} height={350} className="mx-10" />
                <h1 className="h1 text-center my-8">Off-site assets</h1>
                <h3 className="h3 text-center">Coalitions empower members to take advantage of the<br/> benefits of utility scale developments. This is<br/> part of our longer-term energy management<br/> process</h3>
            </div>
        </div>

        <p className="p text-center text-greet my-14">Step 3</p>
        <h1 className="h1 text-center text-primary my-8">We improve your organization’s energy efficiency</h1>
        <div className="flex flex-col-4  bg-white py-8">
            <div className="mx-8 my-8">
                <Image src={car} alt="alt" width={200} height={150} className="mx-16" />
                <h1 className="h3 text-center text-primary my-6">Fleet Electrification</h1>
                <h3 className="h3 text-center ">Electrification as a service<br/> –invest in the future of<br/> mobility</h3>
            </div>
            <div className="mx-">
                <Image src={dol} alt="alt" width={200} height={150} className="mx-16" />
                <h1 className="h3 text-center text-primary my-6">Carbon Offsets</h1>
                <h3 className="h3 text-center ">Become carbon neutral by<br/> offsetting your group’s<br/> operations.</h3>
            </div>
            <div className="mx-8 mb-12">
                <Image src={bul} alt="alt" width={200} height={150} className="mx-16" />
                <h1 className="h3 text-center text-primary my-6">Energy Efficiency</h1>
                <h3 className="h3 text-center ">Upgrades and options to<br/> lower your energy<br/> consumption and increase<br/> value.</h3>
            </div>
            <div className="mx-8 my-8">
                <Image src={bat} alt="alt" width={200} height={150} className="mx-16" />
                <h1 className="h3 text-center text-primary my-6">Energy Storage</h1>
                <h3 className="h3 text-center ">Augment your renewable<br/> energy benefits with<br/> storage options.</h3>
            </div>
        </div>

    </section>
  )
}

export default Coal
