import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletebasket } from '../redux/data';
import { Link } from 'react-router-dom';
const Basket=()=>{
    const items=useSelector(state=>state.contact.basketitems)
    const total=useSelector(state=>state.contact.totalPrice)
const dispatch=useDispatch()
  return (
    <div className="w-full min-h-[700px] bg-white pt-4 pl-2">
        <h1 className='bg-[#1976D2] text-white font-bold max-w-[300px] rounded-md p-2'>{items.length} item total {total} $</h1>
   {items.length===0 ? <div className='flex flex-col w-full h-full bg-white items-center justify-start  pb-[100px]'><img src='./empty2.gif'></img><h1 className='text-2xl font-bold'>Basket is Empty</h1> </div>     :
    <div className="grid max-[373px]:grid-cols-1 pt-4 max-[785px]:grid-cols-3 max-[603px]:grid-cols-2 max-[1026px]:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center">
      {items.map((item) => {
        return (
          <div className="flex flex-col justify-start items-center border-2 p-2 bg-white h-auto max-[439px]:w-[90%] w-[200px] border-b-[1px]">
           <Link to={`/product/${item.id}`} className='flex flex-col items-center justify-center'>
            <div className="w-[100px] h-[100px]">
              <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mt-2">
              <h1 className="font-bold text-sm truncate ">{item.title}</h1>
              <h2 className="flex gap-4 items-center text-gray-700">{item.price} $</h2>
             
              </div>
              </Link>
              <div>
                <button onClick={(e)=>{dispatch(deletebasket({id:item.id}))}} className="w-[100px] bg-blue-600 text-white font-bold flex items-center justify-center p-[2px] rounded-md">
                  Delete
                  <DeleteIcon fontSize="medium" className="text-white ml-2" />
                </button>
              </div>
            </div>
        );
      })}
    </div>}
  </div>
  );
};

export default Basket;