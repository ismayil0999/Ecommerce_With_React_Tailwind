import React from 'react';
import Menu from './Menu';
import Products from './Products';
import Testimonial from './Testimonial';
import Mostseller from './Mostseller';
import PaymentPage from './Payment';
import UserAccount from './UserAccount';
import BottomMenu from './BottomMenu';
import Comment from './Comments';
import ExitPopup from './ExitPopup';
export default function Body() {
  return (
    <div className='flex flex-col w-100 overflow-hidden'>
      <Mostseller />
      <Menu />
      <Products />
      <Testimonial />
    </div>
  );
}
