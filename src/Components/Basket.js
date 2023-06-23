import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { removetocart,increment,decrement } from '../redux/data';
const Basket = ({setOpenbasket}) => {
  const items = useSelector(state => state.contact.basketitems)
  const total = useSelector(state => state.contact.totalPrice)
  const dispatch=useDispatch()
   
  return (
   <div className='fixed  top-0 left-0 z-[1000] w-full h-full bg-black bg-opacity-50'>
   <div className="max-[765px]:w-[90%] w-[40%] fixed top-0 left-0 z-[1000] h-[100%] flex flex-col bg-white items-center">
<div className='w-full flex justify-between p-4 border-b border-1 border-[EBEDF0 ]'>
<div className='flex gap-4 items-center'><img src='./bag.svg' className='w-[20px] h-[40px]'></img> <h1 className='font-bold'>{items.length} items</h1></div>
<div className='flex items-center'><CancelIcon onClick={()=>{setOpenbasket(false)}} className='text-grey-600 hover:text-blue-600'/></div>
    </div>
    <div className='flex flex-col gap-4 pt-2 justify-start overflow-y-scroll h-auto pb-[40px] w-full noscroll'>
{items.length===0 ? <div className='flex flex-col items-center justify-center gap-[30px]'><img src='./bag.svg' className='text-black w-[50%] h-[50%]'></img><h1 className='font-bold text-2xl'>Your basket empty</h1></div> :items.map(product=>{
  return <div className='flex w-full h-[100px] gap-4 pl-4 pb-4 items-center border-b border-[EBEDF0] border-1'>
    <div className='flex flex-col items-center justify-center bg-[#F3F4F6] rounded-2xl w-[30px] h-[80px]'>
      <AddIcon fontSize='small' className='cursor-pointer' onClick={()=>{dispatch(increment({id:product.id}))}} />
      <h1>{product.amount}</h1>
      <RemoveIcon fontSize='small' className='cursor-pointer'  onClick={()=>{dispatch(decrement({id:product.id}))}} />
    </div>
<div className='w-[60px] h-[60px]'><img src={product.img} className='w-full h-full'></img></div>
<div className='flex flex-col w-[40%]'>
  <h1>{product.title}</h1>
  <h1>$ {product.price}</h1>
</div>
<h1>{product.amount}</h1>
<div className='flex w-[30px] h-[30px] hover:bg-[#F1F3F4] rounded-full items-center justify-center '>
<CloseOutlinedIcon onClick={()=>{dispatch(removetocart({id:product.id}))}} fontSize='small'/>
</div>
    </div>
})}
    </div>
<div className='bg-white w-full h-[130px] flex justify-center'>
<div className='flex fixed bottom-4 justify-between items-center p-2 bg-[#009F7F] max-[765px]:w-[75%] w-[35%] rounded-full'>
  <h1 className='text-white font-bold text-2xl pl-4'>Total</h1>
  <h1 className='text-black bg-white rounded-full w-[120px] h-[40px] flex items-center justify-center font-bold'>$ {total}</h1>
</div>
</div>
</div>
</div>
  );
};

export default Basket;