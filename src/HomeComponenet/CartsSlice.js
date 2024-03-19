import React from 'react';
import '../CSS/CartSlice.css'

const CartSlice = () => {
  return (
    <div>
      <div className="colorful-text">
        <h1>Choose any products</h1>
        <h2>Buy everything with us</h2>
      </div>
      
      <div className="product-categories">
        <div className="category" id="dslr-camera">
          <img src="https://www.shutterstock.com/image-photo/udonthani-thailand-january-31-2016-260nw-369981701.jpg" alt="DSLR Camera" />
          <p><b>DSLR Camera</b></p>
        </div>
        <div className="category" id="shoes">
          <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/55f8b9cf7dc349139a6daf460051efa6_9366/Ultrabounce_Shoes_Black_HQ1476_01_standard.jpg" alt="Shoes" />
          <p><b>Shoes</b></p>
        </div>
        <div className="category" id="photography">
          <img src="https://lh3.googleusercontent.com/proxy/Iz038yqjrIPlFoGP047cGpDabLh_atJbeMpFIODCBUGt7Tia_3_QHS4x4cStfGwYhzV32C21US5IfVgHfQmoKeClMHHOvaL6P0Wb3uow7CeJNCcJcFxm699UOzpNkO-r_XtRR3bl" alt="Photography" />
          <p><b>Photography</b></p>
        </div>
        <div className="category" id="formal-bags">
          <img src="https://c.ndtvimg.com/2024-01/lrme3gd_mens-formal-clothes_625x300_22_January_24.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350" alt="Formal Dress" />
          <p><b>Formal Dress</b></p>
        </div>
        <div className="category" id="colorful-bags">
          <img src="https://c8.alamy.com/comp/2HNK9RG/handmade-colourful-leather-bags-and-purses-on-display-at-traditional-souk-street-market-in-morocco-2HNK9RG.jpg" alt="Colorful Bags" />
          <p><b>Colorful Bags</b></p>
        </div>
        <div className="category" id="home-decor">
          <img src="https://static01.nyt.com/images/2021/02/28/realestate/26diyextra-slide-EVOY/26diyextra-slide-EVOY-superJumbo.jpg" alt="Home Decor" />
          <p><b>Home Decor</b></p>
        </div>
      </div>
    </div>
  );
};

export default CartSlice;
