import React, { useState } from 'react';
import { Tabs, Tab, Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useNavigate} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
function LoginRegisterTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box className='bg-body w-[100%] h-[700px] pt-[20px]' >
      <Tabs value={activeTab} onChange={handleTabChange} centered>
      <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>
      <TabPanel value={activeTab} index={0} className="flex flex-cols">
    <div className='flex flex-col gap-[20px] items-center w-[100%]'>
    <TextField id="outlined-basic" label="Username"  className='w-[100%] md:w-[50%] lg:w-[50%]' variant="outlined" />
      <TextField id="outlined-basic" type='password' label="Password"  className='w-[100%] md:w-[50%] lg:w-[50%]' variant="outlined" />
      <FormControlLabel control={<Checkbox  />}  className='w-[100%] md:w-[50%] lg:w-[50%]' label="Remember me" />
<Button className='bg-red-600 w-[100%] md:w-[50%] lg:w-[50%]' variant='contained'>Login</Button>
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