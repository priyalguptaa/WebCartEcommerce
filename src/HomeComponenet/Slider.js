import React from 'react';

const Slider = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" style={{ width: '100%', height: '500px' }}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://fotostube-sarah.de/wp-content/uploads/2018/08/bs9.jpg" className="d-block w-100" alt="First slide" style={{height:'500px'}}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Explore Nature</h5>
            <p>Experience the beauty of nature with our outdoor collection.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://www.antexa.com/images/antex-machines/conoprint/conoprint-shoes-slider-antex-multicolor-space-dyeing-machines-biella-italy.jpg" className="d-block w-100" alt="Second slide" style={{height:'500px'}}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Trendy Footwear</h5>
            <p>Step out in style with our latest shoe collection.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://www.highsnobiety.com/static-assets/dato/1632507912-vintage-clothes-thrift-shopping-feature.jpg" className="d-block w-100" alt="Third slide" style={{height:'500px'}}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Vintage Fashion</h5>
            <p>Discover timeless elegance with our vintage clothing line.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
