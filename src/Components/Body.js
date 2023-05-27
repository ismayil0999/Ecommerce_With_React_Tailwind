import React from 'react';
import Menu from './Menu';
import Products from './Products';
import Slider from './Slider';
import Testimonial from './Testimonial';

export default function Body() {
  return (
    <div className='flex flex-col w-100 overflow-hidden'>
  <Slider/>
      <Products/>
      <Testimonial/>
    </div>
  );
}
