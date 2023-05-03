import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Routes,Route } from 'react-router-dom';
import FavoriteProducts from './Components/FavoriteProducts';
import Homepage from './Components/Homepage';
import Slider from './Components/Slider';
import Testimonial from './Components/Testimonial';
function App() {
 
  return (
    <div className='w-full h-full overflow-hidden bg-body'>
      <Header/>
      <Slider/>
   <Routes>
    <Route path="/" exact element={<Body/>}></Route>
    <Route path='/favorite' element={<FavoriteProducts/>}></Route>
   </Routes>
   <Testimonial/>
    </div>
  );
}

export default App;
