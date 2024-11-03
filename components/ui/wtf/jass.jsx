"use client"
import Image from "next/image"
import ener from "/public/image/ener.jpeg"
import arrow from "/public/image/arrow.jpeg"
import brok from "/public/image/brok.jpeg"
import org from "/public/image/org.jpeg"
import screen from "/public/image/screen.jpeg"
import mon from "/public/image/mon.jpeg"
import mem from "/public/image/mem.jpeg"
import cost from "/public/image/cost.jpeg"


const Jass = () => {
  return (
    <>
    <section className="bg-get p-24">
        <h1 className="h1 my-6 text-center text-accent/100">OLD<span className="text-primary">BROKE</span>RAGE MODEL</h1>
        <h3 className="h3 text-primary text-center">Brokers don’t have incentive alignment with their users.<br/>
        Their revenue model is simply markup based.</h3>

        <div className="flex flex-col-5 mx-42 my-8">
            <div className="ml-20">
                <Image src={ener} alt="alt" width={120} height={100} className="mx-20" />
                <h1 className="h3 text-center text-primary my-6">ENERGY PROVIDER</h1>
                 <h3 className="p   text-center">Brokers buy and sell grid power to<br/> get a price they can market to<br/> consumers.</h3>

            </div>
            <div className="mt-48">
                <Image src={arrow} alt="alt" width={70} height={30}></Image>
            </div>
            <div className="mx-10 mt-10">
                <Image src={brok} alt="alt" width={120} height={100} className="mx-20" />
                <h1 className="h3 text-center text-primary my-6">BROKER</h1>
                 <h3 className="p   text-center">Brokers normally lock in a price<br/> on a specific date, despite<br/> changing market conditions.</h3>

            </div>
            <div className="mt-48">
                <Image src={arrow} alt="alt" width={70} height={30}></Image>
            </div>

            <div className="mx-12 mt-10">
                <Image src={org} alt="alt" width={120} height={100} className="mx-20" />
                <h1 className="h3 text-center text-primary my-6">ORGANISATION</h1>
                 <h3 className="p   text-center">They dont optimize your costs, do<br/> not give you optimized options on<br/> renewable energy, and savings do<br/> not trickle down to you.</h3>

            </div>

           
        </div>
        <Image src={screen} alt="alt" width={1000} height={1000} className="my-12 mx-28"/>
    </section>
    <div className="p-16 bg-[#f1f1f1] flex flex-col-3">
        <div className="my-8 mx-20">
            <Image src={mon} alt="alt" width={200} height={150} className="ml-20 my-12"/>
            <h3 className="h3 text-center text-primary my-8">No upfront investment</h3>
            <h3 className="h3 text-center ">Our business model is focused on<br/> investing in and developing assets<br/> to service our partners.</h3>


        </div>
        <div className=" mx-20">
            <Image src={mem} alt="alt" width={200} height={150} className="ml-16 my-12"/>
            <h3 className="h3 text-center text-primary my-8">Member use Incitive</h3>
            <h3 className="h3 text-center ">Econergy can create a royalty <br/> program for organizations<br/> interested in a coalition.</h3>


        </div>
        <div className="my-8 mx-20">
            <Image src={cost} alt="alt" width={200} height={150} className="ml-20 my-12"/>
            <h3 className="h3 text-center text-primary my-8">No costs to maintain</h3>
            <h3 className="h3 text-center ">This is an 100% opt-in program for<br/> members. Your organization owns<br/> the coalition.</h3>


        </div>

    </div>
    </>
  )
}

export default Jass
