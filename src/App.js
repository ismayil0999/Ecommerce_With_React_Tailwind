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
function App() {
  return (
    <div className='w-full h-full overflow-hidden bg-body'>
      <Navbar/>
   <Routes>
   <Route path='/' exact element={<Body/>}></Route>
    <Route path='/favorite' element={<FavoriteProducts/>}></Route>
    <Route path='/login' element={<LoginRegisterTabs/>}></Route>
    <Route path='/basket' element={<Basket/>}></Route>
    <Route path='/product/:id' element={<SingleProduct/>}></Route>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
