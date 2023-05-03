import React from 'react';
import Header from './Header';
import Body from './Body';

export default function Homepage() {
  return (
    <div className='flex flex-col w-full'>
      <Header/>
      <Body/>
    </div>
  );
}
