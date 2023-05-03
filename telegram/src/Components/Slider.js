import React from 'react';
export default function Slider() {
  return (
    <div className='flex flex-col'>
      <section className='w-full h-58 pb-4 pt-4 md:h-58 lg:h-58 lg:pb-2 flex justify-center items-start box-border'>
        <div className='flex w-full gap-4 box-border pl-4 pr-2'>
          <div className='w-2/4'>
            <img className='rounded-2xl w-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSYIdNUWZ639gsQx-ZRfWlGDyZgiSJHTpgrRPafLbnZcIOUDArxIl61pnGyDLG_Jlo_s&usqp=CAU '></img>
          </div>
          <div className='w-2/4'>
            <img className='rounded-2xl w-full' src='https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2029.jpg '></img>
          </div>
        </div>

      </section>
    </div>
  );
}
