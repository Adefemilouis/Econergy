
import Link from 'next/link'

import Nav from './Nav'
import MobileNav from '../MobileNav'


const Header = () => {
  return (
   <header className=' bg-primary py-8 xl:py-12 text-white cursor-pointer text-size-25 fixed w-[100%]'>
    <div className="container mx-auto flex justify-between items-center ">
     {/* logo*/}
    
   <Link href="/">
   < h1 className='text-accent text-4xl font-semibold hover:text-accent '>Eco<span className='text-white'>nergy</span></h1>

   </Link>
        <div className='hidden xl:flex items-center gap-12'>
        <Nav/>
         </div>

      <div className="xl:hidden">
        <MobileNav />
        </div>
    </div>
   
   </header>
  )
}

export default Header
