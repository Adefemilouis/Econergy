"use client"
import sun from "/public/image/sun.jpeg"
import plane from "/public/image/plane.jpeg"
import Image from "next/image"
const Tail = () => {
  return (
   <section className="bg-greet p-6 my-10 ">
    <h3 className="h3 text-center text-primary my-12">BE A PART OF CLIMATE SOLUTION</h3>
   <div className="flex xl:flex-col-3 my-6" >
    <div className="mx-24">
        <Image src={sun} alt="alt" width={400} height={300} className="ml-20" />
        <h2 className="h2 my-6 ml-40 text-white">48.5</h2>
        <h3 className="h3 my-6 text-center text-white">AVERAGE GIGATIONS OF CO2 EQUIVALENT </h3>
        <h1 className="h1 text-primary">that can be reduced by distributed <br/> solar over next 30 years</h1>

    </div>
    <div className="h2 mr-20 my-48 text-white">=</div>
    <div className="mx-14 ">
        <Image src={plane} alt="alt" width={400} height={150} className="ml-24" />
        <h2 className="h2 my-6 ml-48 text-white">24.1</h2>
        <h3 className="h3 my-6 mr-20 text-center text-white">BILLION PEOPLE ON AVERAGE </h3>
        <h1 className="h1 text-primary">taking a flight from Denver to New York, round-trip</h1>

    </div>
    
   </div>
   </section>
  )
}

export default Tail
