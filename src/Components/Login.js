import React, { useState,useRef } from 'react';
import { Tabs, Tab, Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import GoogleIcon from '@mui/icons-material/Google';
import {Link} from 'react-router-dom';
import { login } from '../redux/data';

import { useDispatch } from 'react-redux';
function LoginRegisterTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const username=useRef()
  const password=useRef()
  const dispatch=useDispatch()
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box onClick={(e)=>{}} className='bg-black flex items-center justify-center fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  w-[100%] h-[700px] pt-[100px] bg-opacity-50 z-[1000]' >
     <div className='bg-white max-[420px]:w-[90%] w-[80%] md:w-[60%] h-[540px] rounded-xl pt-[40px] md:mt-[-40px]'>
     <Tabs value={activeTab} onChange={handleTabChange} centered>
      <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>
      <TabPanel value={activeTab} index={0} className="flex flex-cols items-center">
    <div className='flex flex-col gap-[20px] items-center w-[100%]'>
    <TextField id="outlined-basic" ref={username} label="Username"  className='w-[100%] md:w-[50%] lg:w-[50%]' variant="outlined" />
      <TextField id="outlined-basic" ref={password} type='password' label="Password"  className='w-[100%] md:w-[50%] lg:w-[50%]' variant="outlined" />
      <FormControlLabel control={<Checkbox  />}  className='w-[100%] md:w-[50%] lg:w-[50%]' label="Remember me" />
<Button className='bg-green-600 w-[100%] md:w-[50%] lg:w-[50%]'  variant='contained'>Login</Button>
<Button className='bg-red-600 w-[100%] md:w-[50%] lg:w-[50%] font-bold flex gap-[20px]' variant='contained'><GoogleIcon/> <h1 className='font-bold'>Login with Google</h1></Button>
    </div>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
      <div className='flex flex-col gap-[20px]  items-center w-[100%]'>
    <TextField id="outlined-basic" label="Username" className='w-[100%] md:w-[50%] lg:w-[50%]' variant="outlined" />
      <TextField id="outlined-basic" label="Email"  className='w-[100%] md:w-[50%] lg:w-[50%] ' variant="outlined" />
      <TextField id="outlined-basic" label="Password" type='password'  className='w-[100%] md:w-[50%] lg:w-[50%]' variant="outlined" />
      <TextField id="outlined-basic" label="Repeat password" type='password'  className='w-[100%] md:w-[50%] lg:w-[50%] ' variant="outlined" />
      <FormControlLabel control={<Checkbox  />}  className='w-[100%] md:w-[50%] lg:w-[50%]' label="I Agree to Privacy & Policy" />
<Button className='bg-red-600 w-[100%] md:w-[50%] lg:w-[50%] ' variant='contained'>Register</Button>
    </div>
      </TabPanel>
      </div>
    </Box>
  );
}

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}


export default LoginRegisterTabs;