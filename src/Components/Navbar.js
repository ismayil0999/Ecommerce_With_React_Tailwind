import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Badge } from '@mui/material';
import { ShoppingCart, Favorite, AccountCircle, Search } from '@mui/icons-material';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {openmenu}  from '../redux/data';
import { useDispatch } from 'react-redux';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useSelector} from "react-redux";
const Navbar = () => {
    const favoriteproducts=useSelector(state=>state.contact.favoriteProducts)
    const dispatch=useDispatch()
    const location=useLocation()
    const navigate = useNavigate();
console.log(location)
  return (
    <AppBar position="static">
      <Toolbar className='flex justify-between'>
      <div className='flex items-center gap-[10px]'>
  {location.pathname!="/" ?    <ArrowBackIosIcon onClick={()=>{navigate(-1)}} className='font-bold'/>  :  <MenuIcon className='text-white' fontSize='large' onClick={()=>{dispatch(openmenu())}}/>}
  <h2 className='font-[600] text-2xl'>Ecommerce</h2>
   </div>
        <div sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Link to="/favorite">
          <IconButton size="large" color="inherit">
            <Badge  badgeContent={favoriteproducts.length} color="secondary">
              <Favorite />
            </Badge>
          </IconButton>
          </Link>
          <IconButton size="large" color="inherit">
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
    </AppBar>
  );
};

export default Navbar;
