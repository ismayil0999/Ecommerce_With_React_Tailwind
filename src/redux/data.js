import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export const getContacts = createAsyncThunk("getContacts", async () => {
    const response = await axios.get("https://mocki.io/v1/1f2fb10d-6aec-44d4-9990-6e1478a608de")
    return response.data
})
const listitem = [
    {
        title: "All products",
        icon: <CategoryIcon />,
        class: "text-blue-600",
        key: 0
    },
    {
        title: "Smartphones",
        icon: <SmartphoneOutlinedIcon />,
        class: "text-green-600",
        key: 1
    },
    {
        title: "Notebooks",
        icon: <LaptopMacOutlinedIcon />,
        class: "text-red-600",
        key: 2
    },
    {
        title: "Televisor",
        icon: <TvOutlinedIcon />,
        class: "text-blue-600",
        key: 3
    },
    {
        title: "Accessories",
        icon: <HeadsetOutlinedIcon />,
        class: "text-yellow-600",
        key: 4
    },
    {
        title: "Discounted",
        icon: <DiscountIcon />,
        class: "text-blue-600",
        key: 5
    },
]

const filteritem = [
    {
        title: "Low to high",
        icon: < ArrowDropUpIcon />,
        class: "text-green-400",
        key: 1
    },
    {
        title: "High to Low",
        icon: <ArrowDropDownOutlinedIcon />,
        class: "text-red-600 text-bold",
        key: 2
    },
    {
        title: "Alphabetic",
        icon: <SortByAlphaOutlinedIcon />,
        key: 3
    }
]

export const data = createSlice({
    name: "appdata",
    initialState: {
        contacts: [],
        loading: false,
        listitem: listitem,
        filteritem: filteritem,
        filteredItems: [],
        favoriteProducts: [],
        basketitems: [],
        search: false,
        basket: [],
        categoryName: "All products",
        totalPrice:0,
isLogged:false,
popup:false
    },
    reducers: {
        filter: (state, action) => {
            if (action.payload.category.innerText === "All products") {
                state.contacts = state.filteredItems
            } else if (action.payload.category.innerText === "Discounted") {
                state.contacts = state.filteredItems.filter(item => item.discount > 0)
            }
            else {
                state.contacts = state.filteredItems.filter(item => item.category === action.payload.category.innerText)
            }
          
        },
        pricefilter: (state, action) => {
            if (action.payload.text === "Low to high") {
                state.contacts.sort((a, b) => a.price - b.price)
            
            } else if (action.payload.text === "High to Low") {
                state.contacts.sort((a, b) => b.price - a.price)
             
            }
            else if (action.payload.text === "Alphabetic") {
                state.contacts.sort((a, b) => a.title.localeCompare(b.title))
             
            }

        },
        searchProduct: (state, action) => {
            state.contacts = state.filteredItems.filter(item => item.title.toLowerCase().includes(action.payload.value.toLowerCase()))
        },
        addfavorite: (state, action) => {
            const product = state.contacts.find(item => item.id === action.payload.id)
            const alred = state.favoriteProducts.find(item => item.id === product.id)
            if (!alred) {
                state.favoriteProducts.push(product)
                localStorage.setItem("item", JSON.stringify(...[state.favoriteProducts]))
            } else {

            }
            const item = JSON.parse(localStorage.getItem('item'));
            const pro=item.map(e=>{
                return e.id
              })
            if(pro.includes(action.payload.id)){
               action.payload.target.classList.add("text-blue-600")
            }
        },
        removefavorite:(state,action)=>{
state.favoriteProducts=state.favoriteProducts.filter(item=>item.id!=action.payload.id)
        },
        addtocart: (state, action) => {
            const product = state.contacts.find(item => item.id === action.payload.id);
            const alreadyAdded = state.basketitems.find(item => item.id === product.id);
            
            if (!alreadyAdded) {
              const productWithAmount = { ...product, amount: 1 }; // Add amount property with initial value 1
              state.basketitems.push(productWithAmount);
            } else {
                // Increase the product amount
                const updatedBasketItems = state.basketitems.map(item => {
                  if (item.id === product.id) {
                    return { ...item, amount: item.amount + 1 };
                  }
                  return item;
                });
                state.basketitems = updatedBasketItems;
              }
            
            const totalPrice = state.basketitems.reduce((accumulator, item) => {
              return accumulator + item.price * item.amount;
            }, 0);
            
            state.totalPrice = totalPrice;
          },
          removetocart:(state,action)=>{
state.basketitems=state.basketitems.filter(item=>item.id!=action.payload.id)
const totalPrice = state.basketitems.reduce((accumulator, item) => {
    return accumulator + item.price * item.amount; 
  }, 0);
  
  state.totalPrice = totalPrice;
          },
        deletebasket:(state,action)=>{
state.basketitems=state.basketitems.filter(item=>item.id!==action.payload.id)
const totalPrice = state.basketitems.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);

  state.totalPrice = totalPrice;
        },
        increment: (state, action) => {
            const updteitems=state.basketitems.map(el=>{
                if (el.id === action.payload.id) {
                    return { ...el, amount: el.amount + 1 };
                  }
                  return el;

            })
            state.basketitems=updteitems
            const totalPrice = state.basketitems.reduce((accumulator, item) => {
                return accumulator + item.price * item.amount; 
              }, 0);
              
              state.totalPrice = totalPrice;
          },
          decrement: (state, action) => {
            const updteitems=state.basketitems.map(el=>{
                if (el.id === action.payload.id) {
                    return { ...el, amount: el.amount===1 ? 1 : el.amount - 1 };
                  }
                  return el;

            })
            state.basketitems=updteitems
            const totalPrice = state.basketitems.reduce((accumulator, item) => {
                return accumulator + item.price * item.amount; 
              }, 0);
              
              state.totalPrice = totalPrice;
          },
        opensearch: (state) => {
            state.search = true
        },
        closesearch: (state) => {
            state.search = false
        },
        changecategory: (state, action) => {
            state.categoryName = action.payload.categoryname
},
        login:(state,action)=>{
           state.isLogged=true
            localStorage.setItem("islogged",state.isLogged)
        },
        logout:(state)=>{
            state.isLogged=false
            localStorage.removeItem("islogged")
            state.popup=false
        },
        showPopup:(state)=>{
            state.popup=true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getContacts.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getContacts.fulfilled, (state, action) => {
            state.contacts = action.payload
            state.filteredItems = action.payload
            state.loading = false



        })
    }

})
export const { filter, searchProduct,login,removefavorite,increment,decrement,removetocart,logout,showPopup, addfavorite, menu, opensearch, closesearch, addtocart,deletebasket, pricefilter, changecategory } = data.actions
export default data.reducer
