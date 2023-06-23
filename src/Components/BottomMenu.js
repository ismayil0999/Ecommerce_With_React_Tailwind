import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { showPopup } from '../redux/data';
export default function BottomMenu() {
  const [value, setValue] = useState(0);
const login=useSelector(state=>state.contact.isLogged)
const dispatch=useDispatch()
  return (
    <Box className="fixed bottom-0 left-0 z-[1000] w-full min-[545px]:hidden bg-body">
      <BottomNavigation
        showLabels
        value={value}
        className="bg-input flex"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          component={Link}
          to="/"
          className="text-black"
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          component={Link}
          to="/favorite"
        />
        <BottomNavigationAction
          label="Basket"
          icon={<ShoppingCartIcon />}
          component={Link}
          to="/basket"
        />
         {login===true ? <BottomNavigationAction
          label="Log out"
          icon={<ExitToAppIcon />}
          onClick={()=>{dispatch(showPopup())}}
        /> : null }
      </BottomNavigation>
    </Box>
  );
}