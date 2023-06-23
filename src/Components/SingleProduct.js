import React, { useState} from 'react';
import { Typography, Box, Button, Rating, IconButton,Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams,Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getContacts, addfavorite, addtocart } from '../redux/data';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PercentIcon from '@mui/icons-material/Percent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function SingleProduct() {
    const [productCount, setProductCount] = useState(1);
const products=useSelector(state=>state.contact.contacts)
const params=useParams()
const item=products.find((items)=>items.id===Number(params.id))
const relatedproducts=products.filter(element=>element.category===item.category)

const items = useSelector(state => state.contact.basketitems)
const inbasket=items.map(e=>{
  return e.id
})
console.log(item)
const categoryName = useSelector(state => state.contact.categoryName)
const [visible, setVisible] = useState(10);
const dispatch = useDispatch()
const handleIncrement = () => {
      setProductCount((prevCount) => prevCount + 1);
    };
 
    const handleDecrement = () => {
      if (productCount > 1) {
        setProductCount((prevCount) => prevCount - 1);
      }
    };
    return ( 
      <Box className='pt-2 pb-[50px]'>
      <Box className="flex flex-col md:flex-row pt-[30px] md:pt-[50px] pb-[100px]">
      <Box className="flex flex-col gap-[20px] md:gap-[50px] md:basis-[50%] items-center">
        <img src={item?.img} alt="product" style={{ width: '300px' }} />
        <Box className="flex  gap-[20px]">
        <img src={item.img} alt="Thumbnail 1" style={{ width: '80px', marginRight: '10px' }} />
        <img src={item.img}    alt="Thumbnail 2" style={{ width: '80px', marginRight: '10px' }} />
        <img src={item.img}   alt="Thumbnail 3" style={{ width: '80px', marginRight: '10px' }} />
      </Box>
      </Box>
      <Grid className='basis-[50%] pl-4 md:pl-0 mt-[40px] md:mt-0' >
        <Grid item >
          <Box>
           <h1 className='font-[700] text-2xl pb-4'>
            {item?.title}
           </h1>
           <Typography variant="h6" mb={2} className='text-[#009F7F] font-bold text-bold'>
             {item?.price} $
            </Typography>
           <Rating name="product-rating" value={4.5} readOnly className='pb-4' />
            <Typography variant="body1" className=' md:w-[75%]' mb={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet mauris ac massa efficitur, eget ultricies turpis consequat. Sed volutpat lacus ut elit vehicula, in pulvinar risus aliquet. Vestibulum vel mi sed ipsum viverra porta. Fusce feugiat lectus in urna malesuada, nec venenatis leo suscipit. Suspendisse potenti. Donec at magna at metus vestibulum convallis. Cras auctor metus ac erat dictum, at faucibus tellus ultrices. Aliquam vitae dolor eget mauris scelerisque eleifend. Nullam mattis est sit amet velit dapibus, at luctus lorem semper. Sed ut venenatis nisi, in tristique nisi. Donec ac mauris dignissim, consequat lorem ac, tristique neque. Vestibulum volutpat malesuada magna, nec pharetra sapien euismod id. Mauris non urna sem. Phasellus varius mauris et nunc convallis, vitae ultricies metus varius. Sed at velit vel ex malesuada gravida.
            </Typography>
          </Box>
        </Grid>
        <Grid item >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={handleDecrement}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1">{productCount}</Typography>
              <IconButton onClick={handleIncrement}>
                <AddIcon />
              </IconButton>
            </Box>
            <Typography variant="h6" mt={4} mb={2}>
             Total Price:  {item?.price * productCount + "$"}
            </Typography>
            <button className='bg-[#009F7F] w-[70%] sm:w-52 p-2 rounded-sm text-white  mt-8'>Buy Product</button>
          </Box>
        </Grid>
      </Grid>
    
    </Box>
    <h1 className='pl-4 text-black text-2xl'>Related Products</h1>
    <div className='grid w-full grid-cols-1 place-items-center sm:pl-4 sm:pr-4 lg:pl-4 lg:pr-4 pt-8  sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-5 gap-4 lg:gap-8 box-border'>
          {relatedproducts.map(product => {
            return (
              <div key={product.id} className='rounded-2xl flex flex-col w-11/12 bg-[#FFFFFF]  relative pt-8 h-300 rounded  sm:w-full md:w-1/1 lg:w-1/1 gap-8 shadow-sm bg-white hover:translate-y-1 duration-200 transition-all'>
                <FavoriteBorderIcon onClick={(e) => {  dispatch(addfavorite({ id: product.id, target:e.currentTarget})) }} className='absolute right-2 top-2 font-bold text-black'/>
                {product.discount > 0 ? <span className='w-12 flex items-center justify-center bg-[#009F7F] absolute top-2 left-2 rounded-md text-white font-bold'>{product.discount}  <PercentIcon /></span> : null}
                <Link to={`/product/${product.id}`}>
                  <div className='w-full h-100 flex items-center justify-center'>
                    <img src={product.img} alt='' className="h-91 w-91"></img>
                  </div>
                  <div className='mt-4 pl-4 box-border flex flex-col gap-4'>
                    <h2 className='font-bold'>{product.price}<AttachMoneyOutlinedIcon fontSize='small' /></h2>
                    <p className='name text-text font-bold mt-2 h-5 w-48'>{product.title}</p>
                  </div>
                </Link>
              <div className='flex justify-center mt-[-4%]'>
              <button className={inbasket.includes(product.id) ? "bg-[#009F7F] text-white p-2 font-bold mt-auto w-[90%] rounded-md " :'bg-[#F3F4F6] text-black p-2 font-bold mt-auto w-[90%] rounded-md hover:bg-[#009F7F] hover:text-white'}  onClick={() => { dispatch(addtocart({ id: product.id })) }}  >Add to Cart</button>
                </div>
              </div>
            )
          })}
        </div>
</Box>
    );
}

export default SingleProduct;