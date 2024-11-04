import React from 'react'
import green from "/public/image/green.jpg"
import org from "/public/image/org.jpeg"
import cal from "/public/image/cal.jpeg"
import dr from "/public/image/dr.png"
import asb from "/public/image/asb.png"
import assb from "/public/image/assb.png"
import nas from "/public/image/nas.png"
import coun from "/public/image/coun.png"
import york from "/public/image/york.png"
import mich from "/public/image/mich.png"
import vass from "/public/image/vass.png"
import ken from "/public/image/ken.jpg"
import kas from "/public/image/kas.png"
import pow from "/public/image/pow.png"
import ohio from "/public/image/ohio.png"
import oas from "/public/image/oas.png"
import Image from 'next/image'

const Green = () => {
  return (<>
    <section className="p-20 my-64 bg-get">
        <div className="flex flex-col-2">
            <div className="my-6 mx-8">
                <h1 className="h1 my-6 text-primary">Future Green Energy Consortium</h1>
                <h3 className="h3 text-primary my-6">The Future Green Energy Consortium is a nonprofit renewable<br/> energy coalition created and owned by IASA, IASBO, and IASB.</h3>
                <h3 className="h3 my-8 text-[grey]">Future Green’s revolutionary programs are available to school districts to<br/> offer significant savings on energy costs. Econergy is the program<br/> manager for Future Green, with a team across the United States.</h3>
                <h3 className="h3">Future Green’s structure is built to provide maximum short-term and<br/> long-term savings which are contractually guaranteed. Members can<br/> begin by saving money on their current electricity costs, with the ability to<br/> leverage renewable resources to drive rates down even further.</h3>
                <Image src={green} alt="alt" width={900} height={350} className="my-8" />
                <h3 className="h3 text-[grey] my-8">This innovative approach to energy allows valuable resources to be<br/> reinvested in the core missions of coalition members, including the<br/> sponsoring organizations. Future Green is able to develop on-site solar, as<br/> well as facilitate large projects to supply the consortium. This program is<br/> very exciting and full of immense benefits for communities across Illinois.</h3>
                <h1 className='h3 text-primary'><span className='text-accent'>“</span>Our district joined Future Green and immediately<br/> began saving thousands. We are currently looking into<br/> putting solar on our facilities. This will enable us to<br/> control our costs in the long run, instead of being<br/> subject to always changing prices.</h1>
                <h1 className="h1 text-accent my-8">–DR STEVE WEBB</h1>
                <p className="p text-greet my-6">Superintedent, Goreville CUSD 1</p>
                <button className="bg-greet py-8 px-10 text-center text-get h3">Consortium website</button>
            </div>
            <div className="ml-8 px-20  bg-[#f3f0f0]">
                <div className="flex flex-col-1">
                    <Image src={cal} alt="alt" width={120} height={150} className='my-20' />
                   <div className="mx-6 my-16">
                   <h3 className="h3 my-2 text-primary">Project initiated</h3>
                   <h3 className="h3 text-[grey]">October 2018</h3>
                   </div>
                </div>
                <div className="flex flex-col-1">
                    <Image src={org} alt="alt" width={195} height={10} className='my-20 mx-8' />
                   <div className="mx-6 my-16"> 
                   <h3 className="h3 my-6 text-primary">ORGANIZATIONS INVOLVED:</h3>
                   <h3 className="h3 my-6 text-[grey]">The Illinois Association<br/> of School Administrators</h3>
                   <h3 className="h3 my-6 text-[grey]">The Illinois Association<br/> of School Boards</h3>
                   <h3 className="h3 my-6 text-[grey]">The Illinois Association<br/> of School Business<br/> Officials</h3>
                   </div>
                </div>


            </div>
        </div>
        
    </section>

    <div className=" py-30">
            <h1 className="h1 text-get mx-44 my-20">In December of 2017, IASB, IASA, and IASBO came together to<br/> improve our energy programs to better service our members. Given<br/> the economics of a renewable-based consortium, In October of<br/> 2018, we announced the creation of the Future Green and our<br/> intentions to once again put districts ahead of the curve on energy savings.

<br/>We are extremely proud of this new initiative and the cost savings<br/> it will provide school districts for many years to come. We are<br/> proud to be on the cutting edge of energy strategies at a time<br/> when critical investments are desperately needed in our member’s<br/> core missions.</h1>
        </div>

        <div className="flex flex-col-2 mx-44 py-20">
            <div className="mx">
                <Image src={dr} alt="alt" width={100} height={100} />
            </div>
            <div className="mx-6">
                <h1 className="h1 text-accent my-5">-DR BRENT CLARK</h1>
                <h3 className="p text-get m">Illinois Association of School Administrators Executive Director</h3>

            </div>
        </div>

        <div className="py-24 bg-slate-100">
            <div className="flex flex-col-3 my-24 mx-24">
                <div className="mx-8">
                    <button className="py-42 px-40 border border-slate-400 text-center ">
                        <Image src={asb} alt="alt" width={460} height={100} className='my-8' />
                    </button>
                </div>
                <div className="mr-8">
                    <button className="pt-28 pb-28 px-36 border border-slate-400 text-center ">
                        <Image src={nas} alt="alt" width={450} height={180} className='my-8' />
                    </button>
                </div>
                <div className="mx-">
                    <button className="py-28 px-36 border border-slate-400 text-center ">
                        <Image src={assb} alt="alt" width={480} height={360} className='my-8' />
                    </button>
                </div>
            </div>
            <div className="flex flex-col-3 ">
                <div className="ml-28">
                <button className="pb-14 pt-14 px-16 border border-slate-400 text-center ">
                        <Image src={york} alt="alt" width={350} height={360} className='my-8' />
                    </button>
                </div>
                <div className="ml-8">
                <button className="pb-14 pt-14 px-16 border border-slate-400 text-center ">
                        <Image src={coun} alt="alt" width={350} height={360} className='my-8' />
                    </button>
                </div>
                <div className="ml-8">
                <button className="py-36  px-5 border border-slate-400 text-center ">
                        <Image src={mich} alt="alt" width={450} height={360} className='my-8' />
                    </button>
                </div>
            </div>
            <div className="flex flex-col-3 my-8 mx-20">
            <div className="ml-8">
                <button className="pb-14 pt-14 px-16 border border-slate-400 text-center ">
                        <Image src={vass} alt="alt" width={380} height={360} className='my-8' />
                    </button>
                </div>
            <div className="ml-8">
                <button className="pb-0 pt-8 px-28 border border-slate-400 text-center ">
                        <Image src={kas} alt="alt" width={250} height={100} className='my-8' />
                    </button>
                </div>
            <div className="ml-8">
                <button className="pb-14 pt-14 px-16 border border-slate-400 text-center ">
                        <Image src={ken} alt="alt" width={350} height={360} className='my-8' />
                    </button>
                </div>
            </div>
            <div className="flex flex-col-3 mx-20">
                
                <div className="ml-8">
                <button className="pb-1 pt- px-28 border border-slate-400 text-center ">
                        <Image src={pow} alt="alt" width={288} height={100} className='my-8' />
                    </button>
               
                </div>
                <div className="ml-8">
                <button className="pb-28 pt-20 px-24 border border-slate-400 text-center ">
                        <Image src={oas} alt="alt" width={300} height={100} className='my-8' />
                    </button>
               
                </div>
                <div className="ml-8">
                <button className="pb-10 pt-10 px-28 border border-slate-400 text-center ">
                        <Image src={ohio} alt="alt" width={260} height={100} className='my-8' />
                    </button>
               
                </div>
            </div>
        </div>

      </>
    
  )
}

export default Green