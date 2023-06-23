import React,{useRef} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { filter,pricefilter,changecategory} from '../redux/data';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export default function Menu() {
  const items=useSelector(state=>state.contact.listitem)
  const filteritem=useSelector(state=>state.contact.filteritem)
  const dispatch=useDispatch()
  const div=useRef()
  const scrollLefts = () => {
    div.current.scrollLeft -= 200;

  };

  const scrollRight = () => {
    div.current.scrollLeft += 200;
  };

  return (
    <div className='w-100% flex relative'>
       <ChevronLeftIcon onClick={scrollLefts} fontSize='medium' className='bg-white rounded-full  shadow-lg absolute top-[20px] left-2 z-[100] hover:bg-blue-600 hover:text-white'/>
   <div ref={div} className="filter pl-[40px] pr-[40px] flex items-center justify-start pt-2 pl-2 w-[auto] h-[auto]  overflow-x-scroll bg-body h-[70px]  gap-4  border-r-2">
<ul className='w-[auto] flex flex-nowrap shrink-0 gap-2'>
  {  
      items.map((item)=>{
        return <li key={item.key} onClickCapture={(e)=>{dispatch(changecategory({categoryname:e.currentTarget.textContent,e:e}))}}  className='w-[200px]  border-[2px] rounded-[50px] bg-input  border-inset pt-2 pb-2 pl-2 flex items-center  gap-4 font-bold hover:text-blue-600' onClick={(e)=>{dispatch(filter({category:e.currentTarget}))}}><span>{item.icon}</span>{item.title}</li>
      })
  }
  </ul>
<ul className='w-[auto] flex gap-2'>
  {
    filteritem.map((item)=>{
        return <li key={item.key} onClick={(e)=>{dispatch(pricefilter({text:e.currentTarget.textContent}))}} className='w-[200px] rounded-[50px] bg-input border-[2px] pt-2 pb-2 pl-2 flex gap-4 items-center font-bold hover:text-blue-600'><span>{item.icon}</span>{item.title}</li>
      })
  }
  </ul>
    </div>
    <ChevronRightIcon onClick={scrollRight} fontSize='medium' className="bg-white rounded-full z-[100] shadow-lg absolute top-[20px] right-2 z-[1000] hover:bg-blue-600 hover:text-white"/>
    </div>
  );
}
