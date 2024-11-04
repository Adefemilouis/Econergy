import React from 'react'

const Form = () => {
  return (
    <section  className='my-28' >
       <div className="bg-white  py-48 my-16 pl-44 pr-48 m-48">
        <h3 className="h1 text-accent text-center">GET STARTED</h3>
        <h3 className="h3 my-8 text-center">Fill out the form below, or contact us at +1 (815) 200-4733.</h3>

        <form action="" className='mt-14 mr-16'>
          <label htmlFor="Reason for contacting " className=' h3 my-24 text-primary'>Reason for contacting<br/></label>
          <input
            type="text"
            id="Reason for contacting"
            name="name"
            placeholder="I want to join an existing coalition"
            className="h3 w-[880px] border border-[grey] rounded-lg py-3 pl-3 pr-  my-6 outline-none text-accent bg-transparent"
          />
        </form>

        <div className="flex flex-col-2 mr-16 my-8">
          <div className="">
            <form action="ml-">
              <label htmlFor="Your Email" className='h3 text-primary'>Your Email<br/></label>
              <input
                type="text"
                id="Your Email"
                name="name"
                placeholder=""
                className="w-[360px] border border-[grey] rounded-lg py-3 mx px-2 my-6 outline-none	bg-transparent"
              />
            </form>
          </div>
          <div className="mx-5">
            <form action="">
              <label htmlFor="Your Fullname" className='h3 text-primary'>Your Fullname<br/></label>
              <input
                type="text"
                id="Your Fullname"
                name="name"
                placeholder=""
                className="w-[360px] h-[] border border-[grey] rounded-lg py-3  px-5 my-6 outline-none	bg-transparent"
              />
            </form>
          </div>
        </div>
        <div className="flex flex-col-2">
          <div className="mr-16">
          <form action="">
              <label htmlFor="Your Organization's Name" className='h3 text-primary'>Your Organization Name<br/></label>
              <input
                type="text"
                id="Your Organization's Name"
                name="name"
                placeholder=""
                className="w-[360px] h-[] border border-[grey] rounded-lg py-3  px-5 my-6 outline-none	bg-transparent"
              />
            </form>
          </div>
          <div className="mr-5">
          <form action="">
              <label htmlFor="Coalition Name" className='h3 text-primary'>Coalition Name<br/></label>
              <input
                type="text"
                id="Coalition Name"
                name="name"
                placeholder="Choose Coalition"
                className="h3 w-[360px]  border border-[grey] rounded-lg py-3  px-5 my-6 outline-none	bg-transparent"
              />
            </form>
          </div>
        </div>

        <h1 className="h3  ml-16 my-8">Upload a recent utility bill<span className='text-[grey]'>(optional)</span> </h1>
        <button className='bg-greet h3 px-8 mr-16 py-5 text-frost'>Upload Utility Bill</button>

        <form action="" className='my-8  mr-16'>
              <label htmlFor="Message" className='h3 text-primary'>Message<br/></label>
              <input
                type="text"
                id="Message"
                name="name"
                placeholder=""
                className="h3 w-[800px]  border border-[grey] rounded-lg py-20  px-5 my-6 outline-none	bg-transparent"
              />
            </form>
          
            <button className="flex h3 text-white bg-greet px-10 mr-16 py-5 justify-between items-center ">Submit</button>


       </div>
    </section>
  )
}

export default Form
