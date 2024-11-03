"use client"

import Image from "next/image"
import gov from "/public/image/gov.jpg"
import non from "/public/image/non.jpg"
import trad from "/public/image/trad.jpg"

const Government = () => {
  return (
    <section className='bg-frost my-14 pb-6'>
        <h3 className="h3 text-accent text-center my-12">OUR CUSTOMERS</h3>
        <div className="flex flex-col-3 my-14 mx-20">
            <div className="">
                <Image src={gov} alt="alt" width={450} height={400} />
                <h1 className="h1 text-primary text-center my-6">Governments</h1>
                <h3 className="h3 text-center mb-6">Governments can join or form an<br/> energy coalition to save valuable<br/> public resources and stabilize budgets.</h3>
            </div>
            <div className="mx-10">
                <Image src={non} alt="alt" width={550} height={400} />
                <h1 className="h1 text-primary text-center my-6">Nonprofits</h1>
                <h3 className="h3 text-center">Nonprofits can empower their<br/> members to move forward toward <br/> clean energy with maximum<br/> economic benefits.</h3>
            </div>
            <div className="mx-10">
                <Image src={trad} alt="alt" width={450} height={400} />
                <h1 className="h1 text-primary text-center my-6">Trade Associatons</h1>
                <h3 className="h3 text-center">Governments can join or form an<br/> energy coalition to save valuable<br/> public resources and stabilize budgets.</h3>
            </div>
        </div>

    </section>
  )
}

export default Government


