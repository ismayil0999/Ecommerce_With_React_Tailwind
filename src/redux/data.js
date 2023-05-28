import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import DiscountIcon from '@mui/icons-material/Discount';
import axios from "axios"
import FavoriteProducts from "../Components/FavoriteProducts";


export const getContacts=createAsyncThunk("getContacts",async()=>{
        const response =await axios.get("https://mocki.io/v1/1f2fb10d-6aec-44d4-9990-6e1478a608de")
          return response.data
})
const listitem=[
    {
        title:"All products",
        icon:<CategoryIcon/>,
        class:"text-blue-600",
        key:0
    },
  {
      title:"Smartphones",
      icon:<SmartphoneOutlinedIcon/>,
      class:"text-green-600",
      key:1
  },
  {
    title:"Notebooks",
    icon:<LaptopMacOutlinedIcon/>,
    class:"text-red-600",
    key:2
},
{
    title:"Televisor",
    icon:<TvOutlinedIcon/>,
    class:"text-blue-600",
    key:3
},
{
    title:"Accessories",
    icon:<HeadsetOutlinedIcon/>,
    class:"text-yellow-600",
    key:4
},
{
    title:"Discounted",
    icon:<DiscountIcon/>,
    class:"text-blue-600",
    key:5
},
]

const filteritem=[
    {
        title:"Low to high",
        icon:< ArrowDropUpIcon/>,
        class:"text-green-400",
        key:1
    },
    {
        title:"High to Low",
        icon:<ArrowDropDownOutlinedIcon/>,
        class:"text-red-600 text-bold",
        key:2
    },
    {
        title:"Alphabetic",
        icon:<SortByAlphaOutlinedIcon/>,
        key:3
    }
]

const slides=[
    {
        url:"https://i.pinimg.com/originals/07/b4/27/07b427c6bfabfb5d663efaaf05392b0c.png",
    },
]
export const data=createSlice({
    name:"appdata",
    initialState:{
        contacts:[],
        loading:false,
        listitem:listitem,
        filteritem:filteritem,
        filteredItems:[],
        favoriteProducts:[],
        search:false,
        basket:[],
        categoryName:"All products",
    
    },
    reducers:{
filter:(state,action)=>{
  if(action.payload.category.innerText=== "All products"){
state.contacts=state.filteredItems
  }else if(action.payload.category.innerText==="Discounted"){
state.contacts=state.filteredItems.filter(item=>item.discount>0)
  }
  else{
    state.contacts= state.filteredItems.filter(item=>item.category===action.payload.category.innerText)
  }
  console.log(action.payload)
},
pricefilter:(state,action)=>{
if(action.payload.text==="Low to high"){
    state.contacts.sort((a,b)=>a.price -b.price)
    console.log(action.payload.text)
}else if(action.payload.text==="High to Low"){
    state.contacts.sort((a,b)=>b.price - a.price)
    console.log(action.payload.text)}
    else if(action.payload.text==="Alphabetic"){
        state.contacts.sort((a,b)=>a.title.localeCompare(b.title))
        console.log(action.payload.text)}

},
search:(state,action)=>{
    state.contacts=state.filteredItems.filter(item=>item.title.includes(action.payload.value))
},
addfavorite:(state,action)=>{
    const product=state.contacts.find(item=>item.id===action.payload.id)
    const alred=state.favoriteProducts.find(item=>item.id===product.id)
  if(!alred){
    state.favoriteProducts.push(product)
   localStorage.setItem("item",JSON.stringify(...[state.favoriteProducts]))
  }else{
    alert("product add")
  }
},
opensearch:(state,action)=>{
    state.search=true
},
closesearch:(state,action)=>{
    state.search=false
},
addtocart:(state,action)=>{
const product=state.contacts.find(item=>item.id===action.payload.id)
state.basket.push(...[product])
console.log(state.basket)
},
changecategory:(state,action)=>{
state.categoryName=action.payload.categoryname
}
    },
    extraReducers:(builder)=>{
        builder.addCase(getContacts.pending,(state)=>{
            state.loading=true
        });
        builder.addCase(getContacts.fulfilled,(state,action)=>{
            state.contacts=action.payload 
             state.filteredItems=action.payload   
             state.loading=false
             
           
              
           })
    }

})
export const {filter,search,addfavorite,menu,opensearch,closesearch,addtocart,pricefilter,changecategory}=data.actions
export default data.reducer