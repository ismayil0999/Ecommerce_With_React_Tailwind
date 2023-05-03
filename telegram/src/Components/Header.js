import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {openmenu}  from '../redux/data';
import { useDispatch } from 'react-redux';
export default function Header() {
 const dispatch=useDispatch()

  return (
    <div className='bg-black flex flex-no-wrap md:flex-nowrap  justify-between items-center overflow-hidden py-2 md:px-6'>
    <div className='flex justify-start gap-2 items-center pt-2 w-full md:w-auto mb-4 md:mb-0'>
    <div className='flex'>
   <MenuIcon className='text-white' fontSize='large' onClick={()=>{dispatch(openmenu())}}/>
   </div>
      <h1 className='text-xl lg:text-4xl font-bold text-white'>MarketPlace</h1>
    </div>
    <div className='flex justify-center  lg:pb-0 gap-4 lg:gap-8 pr-4 text-white'>
      <ShoppingCartOutlinedIcon />
      <Link to='/favorite'>
        <FavoriteBorderOutlinedIcon />
      </Link>
      <LoginRoundedIcon />
    </div>
  </div>
  );
}
