import React from 'react';
import Header from '../Header';
import ProductCategory from '../ProductCategory';
import AdderSection from './AdderSection';
import Footer from './Footer';

const SingleCategory = () => {
  return (
    <div className='relative bg-white flex flex-col '>\
      <div >
        <Header />
      </div>
      <div className='relative w-screen h-[25.24rem] border-2 border-dashed mt-[3rem]'>
      </div>
      <div className='relative mt-[5rem]'>
        <ProductCategory />
      </div>
      <div className='relative mt-2'>
        <AdderSection/>
      </div>
      <div className='relative '>
       <Footer/>
      </div>
    </div>
  );
}

export default SingleCategory;
