import React, { useState } from 'react';
import { Tabs, Tab, Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import UserPage from './UserPage';
import ProfileEdit from './EditProfile';
import MyOrders from './MyOrders';
import MyCards from './MyCards';
function LoginRegisterTabs() {
  const [activeTab, setActiveTab] = useState(0);
  
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box className='bg-body w-[100%] min-h-[700px] pt-[70px]' >
     <div className='noscroll w-100% overflow-x-scroll flex-col'>
     <Tabs value={activeTab} onChange={handleTabChange} className='w-[150%] flex flex-col overflow-x-scroll '>
  <Tab label="Edit Profile" />
        <Tab label="My Orders" />
        <Tab label="My Cards" />
      </Tabs>
      </div>
      <TabPanel value={activeTab} index={0} className="flex flex-cols">
    <div className='flex flex-col gap-[20px] items-center w-[100%]'>
   <ProfileEdit/>
    </div>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
      <div className='flex flex-col gap-[20px]  items-center w-[100%]'>
  <MyOrders/>
    </div>
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
      <div className='flex flex-col gap-[20px]  items-center w-[100%]'>
<MyCards/>
    </div>
      </TabPanel>
      <TabPanel value={activeTab} index={3}>
      <div className='flex flex-col gap-[20px]  items-center w-[100%]'>
  
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