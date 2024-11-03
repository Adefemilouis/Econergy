import React from 'react'

const Form = () => {
  return (
    <section  className='my-28' >
       <div className="bg-white  py-48 my-16 px-40 mx-40">
        <h3 className="h1 text-accent text-center">GET STARTED</h3>
        <h3 className="h3 my-8 text-center">Fill out the form below, or contact us at +1 (815) 200-4733.</h3>

        <form action="" className='mt-14'>
          <label htmlFor="Reason for contacting " className=' h3 my-24 text-primary'>Reason for contacting<br/></label>
          <input
            type="text"
            id="Reason for contacting"
            name="name"
            placeholder="I want to join an existing coalition"
            className="h3 w-[990px] border border-[grey] rounded-lg py-5 pl-3 pr-72  my-6 outline-none text-accent bg-transparent"
          />
        </form>

        <div className="flex flex-col-2 my-8">
          <div className="">
            <form action="">
              <label htmlFor="Your Email" className='h3 text-primary'>Your Email<br/></label>
              <input
                type="text"
                id="Your Email"
                name="name"
                placeholder=""
                className="w-[500px] border border-[grey] rounded-lg py-6 mx px-5 my-6 outline-none	bg-transparent"
              />
            </form>
          </div>
          <div className="mx-8">
            <form action="">
              <label htmlFor="Your Fullname" className='h3 text-primary'>Your Fullname<br/></label>
              <input
                type="text"
                id="Your Fullname"
                name="name"
                placeholder=""
                className="w-[500px] h-[] border border-[grey] rounded-lg py-6  px-5 my-6 outline-none	bg-transparent"
              />
            </form>
          </div>
        </div>
        <div className="flex flex-col-2">
          <div className="">
          <form action="">
              <label htmlFor="Your Organization's Name" className='h3 text-primary'>Your Organization Name<br/></label>
              <input
                type="text"
                id="Your Organization's Name"
                name="name"
                placeholder=""
                className="w-[500px] h-[] border border-[grey] rounded-lg py-6  px-5 my-6 outline-none	bg-transparent"
              />
            </form>
          </div>
          <div className="mx-8">
          <form action="">
              <label htmlFor="Coalition Name" className='h3 text-primary'>Coalition Name<br/></label>
              <input
                type="text"
                id="Coalition Name"
                name="name"
                placeholder="Choose Coalition"
                className="h3 w-[500px]  border border-[grey] rounded-lg py-6  px-5 my-6 outline-none	bg-transparent"
              />
            </form>
          </div>
        </div>

        <h1 className="h3 my-8">Upload a recent utility bill<span className='text-[grey]'>(optional)</span> </h1>
        <button className='bg-greet h3 px-14 py-8 text-frost'>Upload Utility Bill</button>

        <form action="" className='my-8'>
              <label htmlFor="Message" className='h3 text-primary'>Message<br/></label>
              <input
                type="text"
                id="Message"
                name="name"
                placeholder=""
                className="h3 w-[990px]  border border-[grey] rounded-lg py-28  px-5 my-6 outline-none	bg-transparent"
              />
            </form>
          
            <button className="flex h3 text-white bg-greet px-14 py-6 justify-between items-center ">Submit</button>


       </div>
    </section>
  )
}

export default Form
