import React from 'react';
import Slider from '../HomeComponenet/Slider';
import CartSlice from '../HomeComponenet/CartsSlice';
import Navbar from '../HomeComponenet/Navbar';
import Header from '../HomeComponenet/Header';
import OurProducts from '../HomeComponenet/OurProducts';
import '../CSS/HomePage.css'
import ProductFetching from './ProductsFetching';
// import Pagination from './Pagination';
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Slider />
      <CartSlice className='cart-slice'/>
      <OurProducts/>
      <ProductFetching/>
      {/* <Pagination/> */}
    </div>
  );
};

export default HomePage;
