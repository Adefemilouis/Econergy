"use client"

import Image from "next/image"
import pat from "/public/image/pat.jpg"

const Peace = () => {
  return (
 <section className="bg-frost pb-12">
<div className=" xl:my-20 xl:mx-20">
    <h3 className="h1 text-accent text-center">Partners</h3>
   <div className="flex xl:flex-col-2 xl:my-10">
    <div className="">
     <h1 className="h1 my-6">We are extremely proud of this <br />new initiative and hope that it<br/> serves and saves Illinois districts <br/> for many years to come.”</h1>
     <h3 className="h3 text-primary">-DR BRENT CLARK</h3>
     <p className="p my-6">Illinois Association of School Administrators Executive Director</p>

     <h3 className="h3 my-6">Since 2018, Econergy has been working with the Future<br/> Green Energy Consortium, a not-for-profit initiative of<br /> the Illinois Association of School Administrators, the<br /> Illinois Association of School Boards, and the Illinois<br/> Association of School Business Officials.
     </h3>
     <button className='bg-primary p-6 pr-14 text-white my-6'>
        <h3 className="h3">Learn More</h3>
     </button>
    </div>

    <div className="mx-20 mb-12">
        <Image src={pat} alt="alt" width={700} height={900} />
    </div>
   </div>
</div>
 </section>
  )
}

export default Peace
