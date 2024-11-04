import React from 'react';
import Image from 'next/image';
import hero from '/public/image/hero.jpg'

const Photo = () => {
  return (
    <div className='w-[20px] h-[29px] xl:h-[800px] xl:w-[790px] xl:absolute '>
      <Image src={hero} fill alt="alt" priority quality={50} className="object-contain" />  
      
    </div>
  )
}

export default Photo;
