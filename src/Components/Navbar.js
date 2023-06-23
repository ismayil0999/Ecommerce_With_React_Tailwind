import React from 'react';
import { AppBar, Toolbar, IconButton, Badge } from '@mui/material';
import { ShoppingCart, Favorite, AccountCircle} from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { opensearch, closesearch, searchProduct,showPopup } from '../redux/data';
import { useDispatch } from 'react-redux';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useSelector } from "react-redux";

function Navbar({setOpenbasket,setOpenlogin}) {
  const favoriteproducts = useSelector(state => state.contact.favoriteProducts)
  const basket = useSelector(state => state.contact.basketitems)
  const search = useSelector(state => state.contact.search)
  const logged = useSelector(state => state.contact.isLogged)
  const login=localStorage.getItem("islogged")
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate();


  return (
    <AppBar position='relative' className="w-[100%] h-[60px] flex justify-center">{
      search === true ? <div className='bg-[#1976D2]  flex box-border pl-2 items-center h-full w-full text-white'>
        <CloseIcon fontSize='large' className='w-[60px] font-bold' onClick={() => { dispatch(closesearch()) }} />
        <input onChange={(e) => { dispatch(searchProduct({ value: e.currentTarget.value })) }} className='h-full w-full outline-0 pl-4 bg-transparent placeholder-white text-white' type='text' placeholder='Search product...' ></input>
      </div> :
        <Toolbar className='flex justify-between '>
          <div className='flex items-center gap-[10px]'>
            {location.pathname !== "/" && location.pathname !== "/filteredproducts" ? <ArrowBackIosIcon onClick={() => { navigate(-1) }} className='font-bold' /> : <SearchIcon className='text-white mt-[5px]  rounded-full' fontSize='large' onClick={() => { dispatch(opensearch()) }} />}

            <h2 className='font-[600] text-2xl'>Ecommerce</h2>
          </div>
          <div sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Link to="/favorite"className='max-[545px]:hidden' >
              <IconButton size="large" color="inherit"  >
                <Badge badgeContent={favoriteproducts.length} color="secondary" >
                  <Favorite />
                </Badge>
              </IconButton>
            </Link>
           <IconButton size="large" color="inherit" >
                <Badge badgeContent={basket.length} color="secondary">
                  <ShoppingCart onClick={()=>{setOpenbasket(true)}} />
                </Badge>
              </IconButton>
           {login ?  <ExitToAppIcon onClick={()=>{dispatch(showPopup())}}/> : null}
  
              <IconButton size="large" color="inherit">
             {login? <img src="./user.png" className='w-[30px] h-[30px] rounded-full'></img> : <AccountCircle onClick={()=>{setOpenlogin(true)}}/>}
              </IconButton>
           
          </div>
        </Toolbar>
    }</AppBar>

  );
};

export default Navbar;