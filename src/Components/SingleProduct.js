import React, { useState} from 'react';
import { Typography, Box, Button, Rating, IconButton,Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactImageZoom from 'react-image-zoom';
function SingleProduct() {
    const [productCount, setProductCount] = useState(1);
const products=useSelector(state=>state.contact.contacts)
const params=useParams()
const item=products.find((items)=>items.id==params.id)
console.log(item)
const handleIncrement = () => {
      setProductCount((prevCount) => prevCount + 1);
    };
 
    const handleDecrement = () => {
      if (productCount > 1) {
        setProductCount((prevCount) => prevCount - 1);
      }
    };
    return ( 
      <Box className='pt-8'>
         {<h2 className='pl-4  text-sm text-black font-bold'>{"Home > " + item.category + " > " + item.title }</h2>}
      <Box className="flex flex-col md:flex-row pt-[50px] md:pt-[100px] pb-[100px]">
      <Box className="flex flex-col gap-[20px] md:gap-[50px] md:basis-[50%] items-center">
        <img src={item?.img} alt="Product" style={{ width: '300px' }} />
        <Box className="flex  gap-[20px]">
        <img className='border-[4px]  p-2' src={item.img} alt="Thumbnail 1" style={{ width: '80px', marginRight: '10px' }} />
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
           <Rating name="product-rating" value={4.5} readOnly className='pb-4' />
            <Typography variant="body1" className=' md:w-[75%]' mb={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet mauris ac massa efficitur, eget ultricies turpis consequat. Sed volutpat lacus ut elit vehicula, in pulvinar risus aliquet. Vestibulum vel mi sed ipsum viverra porta. Fusce feugiat lectus in urna malesuada, nec venenatis leo suscipit. Suspendisse potenti. Donec at magna at metus vestibulum convallis. Cras auctor metus ac erat dictum, at faucibus tellus ultrices. Aliquam vitae dolor eget mauris scelerisque eleifend. Nullam mattis est sit amet velit dapibus, at luctus lorem semper. Sed ut venenatis nisi, in tristique nisi. Donec ac mauris dignissim, consequat lorem ac, tristique neque. Vestibulum volutpat malesuada magna, nec pharetra sapien euismod id. Mauris non urna sem. Phasellus varius mauris et nunc convallis, vitae ultricies metus varius. Sed at velit vel ex malesuada gravida.
            </Typography>
            <Typography variant="h6" mb={2} className='text-red-600 font-bold'>
             Price:  {item?.price + "$"}
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
            <Button variant="contained"  sx={{ mt: 3 }}>
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    
    </Box>
</Box>
    );
}

export default SingleProduct;