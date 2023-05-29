import React from 'react';
import Menu from './Menu';
import Products from './Products';
import Testimonial from './Testimonial';
import Mostseller from './Mostseller';

export default function Body() {
  return (
    <div className='flex flex-col w-100 overflow-hidden'>
 <Mostseller/>
 <Menu/>
      <Products/>
      <Testimonial/>
    </div>
  );
}
