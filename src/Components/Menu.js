import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { filter,closemenu,search } from '../redux/data';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export default function Menu() {
  const items=useSelector(state=>state.contact.listitem)
  const menu=useSelector(state=>state.contact.menu)
  const filteritem=useSelector(state=>state.contact.filteritem)
  const dispatch=useDispatch()
  return (
    <div className={menu===true ? "flex flex-col fixed top-0 left-0 bg-white  z-10000 h-full w-3/5" : "'lg:flex absolute lg:relative w-80 bg-white h-screen hidden top-22 lg:top-0 top-0 z-10000 gap-4 flex-col border-r-2 lg:basis-1/5 "}>
<div className='flex w-full gap-4 items-center'>
<input
        type='text'
        onChange={(e) => {
          dispatch(search({ value: e.currentTarget.value }));
        }}
        placeholder='Search product...'
        className='bg-white border-box focus:bg-white w-full  h-41 p-2  outline-none'
      />
      <ArrowBackIosIcon className='w-32 flex' fontSize='medium' onClick={()=>{dispatch(closemenu())}}/>
      </div>
<ul className='w-full'>
<h1 className='text-2xl pl-2 text-disc font-bold bg-blue-600 text-white p-2'>Categories</h1>
  {  
      items.map((item)=>{
        return <li key={item.key} className=' pt-2 pb-2 pl-2 flex gap-4 font-bold hover:text-blue-600' onClick={(e)=>{dispatch(filter({category:e.currentTarget}))}}><span className={item.class}>{item.icon}</span>{item.title}</li>
      })
  }
  </ul>
<ul className='w-full'>
<h1 className='text-2xl pl-2 text-disc font-bold bg-blue-600 text-white p-2'>Filter products</h1>
  {
    filteritem.map((item)=>{
        return <li key={item.key} className=' pt-2 pb-2 pl-2 flex gap-4 font-bold hover:text-blue-600'><span className={item.class}>{item.icon}</span>{item.title}</li>
      })
  }
  </ul>
    </div>
  );
}
