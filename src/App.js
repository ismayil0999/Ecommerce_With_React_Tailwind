import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Routes,Route } from 'react-router-dom';
import FavoriteProducts from './Components/FavoriteProducts';
import Homepage from './Components/Homepage';
import LoginRegisterTabs from './Components/Login';
import SingleProduct from './Components/SingleProduct';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className='w-full h-full overflow-hidden bg-body'>
      <Navbar/>
      <Menu/>
   <Routes>
   <Route path='/' exact element={<Body/>}></Route>
    <Route path='/favorite' element={<FavoriteProducts/>}></Route>
    <Route path='/login' element={<LoginRegisterTabs/>}></Route>
    <Route path='/product/:id' element={<SingleProduct/>}></Route>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
