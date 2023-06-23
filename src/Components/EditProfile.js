import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ProfileEdit = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  

  return (
    <div className='flex flex-col w-full'>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        className='lg:w-[40%]'
      />
      <TextField
        label="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        margin="normal"
        className='lg:w-[40%]'
      />
      <TextField
        label="Adress"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        margin="normal"
        className='lg:w-[40%]'
      />
      <TextField
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        className='lg:w-[40%]'
      />
      <TextField
        label="Phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        margin="normal"
        className='lg:w-[40%]'
      />
      <Button variant="contained" color="primary"   className='w-[40%]'>
        Save
      </Button>
    </div>
  );
};

export default ProfileEdit;