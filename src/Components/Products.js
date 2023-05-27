import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
import { getContacts,addfavorite,addtocart } from '../redux/data';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PercentIcon from '@mui/icons-material/Percent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Rating} from '@mui/material';
import { useLocation,useNavigate} from 'react-router-dom';
export default function Products() {
    const products=useSelector(state=>state.contact.contacts)
    const [visible,setVisible]=useState(8);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getContacts())
    },[dispatch])
  return (
    <div className='flex flex-col z-50 w-full  lg:pt-8  bg-body pb-16 items-center'>
      <div className='flex gap-4 justify-start w-full items-center pl-4'>
      <h1 className='text-start box-border text-2xl font-bold text-black flex items-center'>Category </h1>
      <ArrowForwardIcon/>
      <p className='text-xl font-bold text-blue-600'> {products.length===0 ? "no item" : products[0].category}</p>
    </div>
    <div className='items-center flex flex-col w-full'>
      <div className='grid w-full grid-cols-1 place-items-center sm:pl-4 sm:pr-4 lg:pl-4 lg:pr-4 pt-8  sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-5 gap-4 lg:gap-8 box-border'>
        {products.slice(0,visible).map(product=>{
          return (
            <div key={product.id} className='rounded-2xl flex flex-col w-11/12  relative pt-8 h-300 rounded  sm:w-full md:w-1/1 lg:w-1/1 gap-8 shadow-sm bg-white hover:translate-y-1 duration-200 transition-all'>
              <FavoriteBorderIcon onClick={(e)=>{dispatch(addfavorite({id:product.id,tag:e.target}))}} className='absolute right-2 top-2 font-bold text-red-600'/>
              {product.discount>0 ? <span className='w-12 flex items-center justify-center bg-red-600 absolute top-2 left-2 rounded-md text-white font-bold'>{product.discount}  <PercentIcon/></span> : null }
              <Link to={`/product/${product.id}`}>
              <div className='w-full h-100 flex items-center justify-center'>
                <img src={product.img} alt='' className="h-91 w-91"></img>
              </div>
              <div className='mt-4 pl-2 box-border flex flex-col gap-4'>
                <h2 className='font-bold'>{product.price}<AttachMoneyOutlinedIcon fontSize='small'/></h2>
                <p className='name text-text font-bold mt-2 h-5 w-48'>{product.title}</p>
              </div>
              </Link>
              <button className='bg-blue-600 text-white p-2 font-bold mt-auto' onClick={(e)=>{dispatch(addtocart({id:product.id}))}}  >Add to Cart</button>
            </div>
          )
        })}
      </div>
      {products.length<visible ? <button className='bg-grey-400 w-[70%] sm:w-52 p-2 rounded-2xl text-white font-bold mt-8' onClick={()=>{setVisible((prevValue)=>prevValue+4)}}>No More....</button> : <button className='bg-blue-600 w-[70%] sm:w-52 p-2 rounded-2xl text-white font-bold mt-8' onClick={()=>{setVisible((prevValue)=>prevValue+4)}}>Load More....</button>}
    </div>
  </div>
  );
}
