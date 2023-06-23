import './App.css';
import Body from './Components/Body';
import { Routes,Route } from 'react-router-dom';
import FavoriteProducts from './Components/FavoriteProducts';
import LoginRegisterTabs from './Components/Login';
import SingleProduct from './Components/SingleProduct';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import FilterProduct from './Components/FilterProduct';
import Basket from './Components/Basket';
import UserAccount from './Components/UserAccount';
import { useSelector } from 'react-redux';
import BottomMenu from './Components/BottomMenu';
import ExitPopup from './Components/ExitPopup';
import UserPage from './Components/UserPage';
import { useState } from 'react';
import { Alert } from '@mui/material';
import CustomAlert from './Components/Alert';
function App() {
  const login=useSelector(state=>state.contact.isLogged)
  const [user,setUser]=useState(true)
  const logged=localStorage.getItem("islogged")
  const [openbasket,setOpenbasket]=useState(false)
  const [openlogin,setOpenlogin]=useState(false)
  return (
    <div className='w-full h-full overflow-hidden bg-body'>
      <Navbar setOpenbasket={setOpenbasket} setOpenlogin={setOpenlogin} />
      <BottomMenu/>
      <ExitPopup/>
     {openbasket===true ? <Basket setOpenbasket={setOpenbasket}/> : null}
     {openlogin===true ? <LoginRegisterTabs setUser={setUser} user={user} setOpenlogin={setOpenlogin}/> : null}
   <Routes>
   <Route path='/' exact element={<Body/>}></Route>
    <Route path='/favorite' element={<FavoriteProducts/>}></Route>
    <Route path='/login' element={<UserAccount/>}></Route>
    <Route path='/product/:id' element={<SingleProduct/>}></Route>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
