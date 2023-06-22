import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getContacts, addfavorite, addtocart } from '../redux/data';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PercentIcon from '@mui/icons-material/Percent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function Products() {
  const products = useSelector(state => state.contact.contacts)
  const items = useSelector(state => state.contact.basketitems)
  const item=items.map(e=>{
    return e.id
  })
  console.log(item)
  const categoryName = useSelector(state => state.contact.categoryName)
  const [visible, setVisible] = useState(10);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])


  return (
    <div className='flex flex-col z-50 w-full  lg:pt-8  bg-body pb-16 items-center'>
      <div className='flex gap-4 justify-start w-full items-center pl-4'>
        <p className='text-xl font-bold text-blue-600'> {categoryName}</p>
      </div>
      <div className='items-center flex flex-col w-full'>
        <div className='grid w-full grid-cols-1 place-items-center sm:pl-4 sm:pr-4 lg:pl-4 lg:pr-4 pt-8  sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-5 gap-4 lg:gap-8 box-border'>
          {products.slice(0, visible).map(product => {
            return (
              <div key={product.id} className='rounded-2xl flex flex-col w-11/12 bg-[#FFFFFF]  relative pt-8 h-300 rounded  sm:w-full md:w-1/1 lg:w-1/1 gap-8 shadow-sm bg-white hover:translate-y-1 duration-200 transition-all'>
                <FavoriteBorderIcon onClick={(e) => {  dispatch(addfavorite({ id: product.id, target:e.currentTarget})) }} className='absolute right-2 top-2 font-bold text-black'/>
                {product.discount > 0 ? <span className='w-12 flex items-center justify-center bg-[#009F7F] absolute top-2 left-2 rounded-md text-white font-bold'>{product.discount}  <PercentIcon /></span> : null}
                <Link to={`/product/${product.id}`}>
                  <div className='w-full h-100 flex items-center justify-center'>
                    <img src={product.img} alt='' className="h-91 w-91"></img>
                  </div>
                  <div className='mt-4 pl-4 box-border flex flex-col gap-4'>
                    <h2 className='font-bold'>{product.price}<AttachMoneyOutlinedIcon fontSize='small' /></h2>
                    <p className='name text-text font-bold mt-2 h-5 w-48'>{product.title}</p>
                  </div>
                </Link>
              <div className='flex justify-center mt-[-4%]'>
              <button className={item.includes(product.id) ? "bg-[#009F7F] text-white p-2 font-bold mt-auto w-[90%] rounded-md " :'bg-[#F3F4F6] text-black p-2 font-bold mt-auto w-[90%] rounded-md hover:bg-[#009F7F] hover:text-white'}  onClick={() => { dispatch(addtocart({ id: product.id })) }}  >Add to Cart</button>
                </div>
              </div>
            )
          })}
        </div>
        {products.length < visible ? <button className='bg-red-400 w-[70%] sm:w-52 p-2 rounded-2xl text-white font-bold mt-8' onClick={() => { setVisible((prevValue) => prevValue = 10) }}>Load less....</button> : <button className='bg-[#009F7F] w-[70%] sm:w-52 p-2 rounded-xl text-white font-bold mt-8' onClick={() => { setVisible((prevValue) => prevValue + 5) }}>Load More....</button>}
      </div>
    </div>
  );
}
