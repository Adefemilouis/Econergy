"use client"
import Image from "next/image";
import mon from "/public/image/mon.jpeg"
import gee from "/public/image/gee.jpeg"
import click from "/public/image/click.jpeg"

const First = () => {
  return (
    <section className='my-20 xl:pt-12 xl:px-20 items-center'>
        <h1 className='h1 text-between items-center  text-center text-primary/100'>We help our partner transition to<br /> 100% renewable energy</h1>
    <div className="flex xl:flex-col-3  xl:my-48">
      <div className="">
      <Image src={mon} alt="alt" width={180} height={100} className=" xl:ml-20 text-center"/>
      <h2 className="h1 text-primary xl:my-10">No upfront costs </h2>
      <h3 className="h3 text-/100 "> There are no costs to join the <br/>program, nor fees once you join, nor <br/>investment required for assets. <br/>Econergy takes care of it all.</h3>
      </div>
      <div className="xl:mx-20 xl:mb-56">
      <Image src={gee} alt="alt" width={180} height={100} className=" xl:ml-20 text-center"/>
      <h2 className="h1 text-primary xl:my-10">Unlock Savings </h2>
      <h3 className="h3 text- text-center">You can save on your electric bill by<br/> transitioning to renewable energy <br/>with Econergy.</h3>
      </div>
      <div className="">
      <Image src={click} alt="alt" width={180} height={100} className=" xl:ml-20 text-center"/>
      <h2 className="h1 text-primary xl:my-10">No upfront costs </h2>
      <h3 className="h3 text- items-center"> Simply send us last month’s utility<br/> bills to join an existing energy <br/> coalition, or we can help you <span className="text-primary">create a new coalition.</span></h3>
      </div>
      </div>     
   
    
    </section>
  )
}

export default First;
