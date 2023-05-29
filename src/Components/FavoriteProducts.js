import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PercentIcon from '@mui/icons-material/Percent';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Link} from 'react-router-dom';
import { addtocart } from '../redux/data';
export default function FavoriteProducts() {
    const favoriteproducts=useSelector(state=>state.contact.favoriteProducts)
    const dispatch=useDispatch()
  
  return (
    <div className='w-full flex flex-col bg-body h-[700px]'>
        <div className='flex flex-wrap gap-8 h-full box-border '>
        {favoriteproducts.length===0 ? <div className='flex flex-col w-full h-full bg-white items-center justify-start w-full pb-[100px]'><img src='./empty2.gif'></img><h1 className='text-2xl font-bold'>Favoritelist is Empty</h1> </div> : 
       <div className='grid w-full grid-cols-1 place-items-start pt-8 sm:pl-4 sm:pr-4 lg:pl-4 lg:pr-4   sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-5 gap-4 lg:gap-8 box-border '>{
       favoriteproducts.map(product=>{
          return  <div key={product.id} className='rounded-2xl flex flex-col w-11/12  relative pt-8 h-300 rounded  sm:w-full md:w-1/1 lg:w-1/1 gap-8 shadow-sm bg-white hover:translate-y-1 duration-200 transition-all'>
      
          {product.discount>0 ? <span className='w-12 flex items-center justify-center bg-blue-600 absolute top-2 left-2 rounded-md text-white font-bold'>{product.discount}  <PercentIcon/></span> : null }
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
      })}</div>
        }
        </div>
    </div>
  );
}
