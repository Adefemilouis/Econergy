"use client"

const Search = () => {
  return (
   <section className='bg-greet my-10 p-6 pb-48'>
    <h1 className="h1 text-accent my-10 text-center">STAY IN THE LOOP</h1>
    <h1 className="h1 text-center text-white my-10">News and Announcement</h1>

    <div className="mt-6 text-center ">
        <label htmlFor="your email" className='sr-only'>your email</label>
        <input type="email"
        name='email'
        id='your email'
        required
        placeholder='Your Email'
        className='min-w-0 flex-auto rounded-md border-0 bg-white pl-4  pr-96 py-7 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6'
        />
        <button 
        type='submit'
        className=' px-12 py-7 text-white bg-primary shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6'
        >
            Submit
        </button>
    </div>


   </section>
  )
}

export default Search
