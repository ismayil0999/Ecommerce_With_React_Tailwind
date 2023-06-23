import React from 'react';
import { Button, TextField } from '@mui/material';

const PaymentPage = () => {
  return (
    <div>
      <div className='pt-[10px] w-full flex flex-col items-center gap-[20px]'>
        <TextField
          label="Card number"
          className='w-[40%]'
        />
        <TextField
          label="Expire Date"
          className='w-[40%]'

        />
        <TextField
          label="CVV"
          className='w-[40%]'

        />
        <Button variant="contained" color="primary" className='w-[40%]'>
          Payment
        </Button>
      </div>
    </div>
  );
};
export default PaymentPage