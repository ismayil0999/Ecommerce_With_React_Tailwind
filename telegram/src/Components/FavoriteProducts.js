import React from 'react';
import {useSelector} from "react-redux";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PercentIcon from '@mui/icons-material/Percent';
export default function FavoriteProducts() {
    const favoriteproducts=useSelector(state=>state.contact.favoriteProducts)
  return (
    <div className='w-full flex flex-col bg-body h-full'>
        <div className='flex flex-wrap gap-8 h-full pb-16 pt-16 box-border pl-24 pr-8'>
        {favoriteproducts.map(product=>{
          return <div key={product.id} className='flex flex-col relative pt-8 h-300 rounded w-250 gap-8 shadow-sm bg-white hover:translate-y-1 duration-200 transition-all'> 
         {product.discount>0 ? <span className='w-12 flex items-center justify-center bg-logo absolute top-2 left-2  rounded-md text-white font-bold'>{product.discount}  <PercentIcon/></span> : null }
          <div className='w-full h-100 flex items-center justify-center'>
<img src={product.img} alt='' className="h-91 w-91"></img>
</div>
<div className='pl-2 box-border'>
<h2 className='font-bold'>{product.price}<AttachMoneyOutlinedIcon fontSize='small'/></h2>
<p className='name text-text font-bold mt-2 h-5 w-48'>{product.title}</p>
</div>
<button className='bg-logo text-white p-2 font-bold'>Add to Cart</button>
          </div>
      })}
        </div>
    </div>
  );
}
