import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Badge } from '@mui/material';
import { ShoppingCart, Favorite, AccountCircle, Search } from '@mui/icons-material';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import {opensearch,closesearch,search}  from '../redux/data';
import { useDispatch } from 'react-redux';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import {useSelector} from "react-redux";
const Navbar = () => {
    const favoriteproducts=useSelector(state=>state.contact.favoriteProducts)
    const search=useSelector(state=>state.contact.search)
    const dispatch=useDispatch()
    const location=useLocation()
    const navigate = useNavigate();
console.log(location)




  return (
    <AppBar position="static w-[100%] h-[60px] flex justify-center shadow-lg">{
        search===true ?<div className='bg-[#1976D2] shadow-lg flex box-border pl-2 items-center h-full w-full text-white'>
<CloseIcon fontSize='large' className='w-[60px] font-bold' onClick={()=>{dispatch(closesearch())}}/>
             <input onChange={(e)=>{dispatch(search({value: e.currentTarget.value}))}} className='h-full w-full outline-0 pl-4 bg-transparent placeholder-white text-white' type='text' placeholder='Search product...' ></input>
        </div> :
      <Toolbar className='flex justify-between shadow-lg'>
      <div className='flex items-center gap-[10px]'>
  {location.pathname!="/" && location.pathname!="/filteredproducts" ? <ArrowBackIosIcon onClick={()=>{navigate(-1)}} className='font-bold'/> : <SearchIcon className='text-white mt-[5px]  rounded-full' fontSize='large' onClick={()=>{dispatch(opensearch())}}/>}

  <h2 className='font-[600] text-2xl'>Ecommerce</h2>
   </div>
        <div sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Link to="/favorite">
          <IconButton size="large" color="inherit" >
            <Badge  badgeContent={favoriteproducts.length} color="secondary">
              <Favorite />
            </Badge>
          </IconButton>
          </Link>
          <IconButton size="large" color="inherit" >
            <Badge badgeContent={1} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <Link to="/login">
          <IconButton size="large" color="inherit">
            <AccountCircle />
          </IconButton>
          </Link>
        </div>
      </Toolbar>
}</AppBar>
 
  );
};

export default Navbar;
