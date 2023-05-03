import React from 'react';
import Menu from './Menu';
import Products from './Products';

export default function Body() {
  return (
    <div className='flex w-100 overflow-hidden'>
      <Menu/>
      <Products/>
    </div>
  );
}
