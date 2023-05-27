import React from 'react';

export default function Testimonial() {
  return (
    <div>
      <div className='flex pt-16 pb-16 box-border ml-4 mr-4 bg-body rounded-2xl md:gap-8 gap-16 lg:gap-8 flex-wrap justify-center items-center'>
        <div className='shadow-xl  w-full lg:w-48 md:w-48 h-28 flex items-center justify-center'>
            <img src='./img1.avif'></img>
        </div>
        <div className='shadow-xl w-full lg:w-48 md:w-48 h-28  flex items-center justify-center' >
            <img src='./img2.avif' className='h-32'></img>
        </div>
        <div className='shadow-xl w-full lg:w-48 md:w-48 h-28  flex items-center justify-center'>
            <img src='./img3.avif'></img>
        </div>
        <div className='shadow-xl  w-full lg:w-48 md:w-48 h-28 flex items-center justify-center'>
            <img src='./img4.webp'></img>
        </div>
        <div className='shadow-xl  w-full lg:w-48 md:w-48 h-28 flex items-center justify-center'>
            <img src='./img5.webp'></img>
        </div>
        <div className='shadow-xl w-full lg:w-48 md:w-48 h-28 flex items-center justify-center'>
            <img src='./img6.webp'></img>
        </div>
      </div>
    </div>
  );
}
