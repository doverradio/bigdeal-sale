import { useState } from 'react';
// import { useState, useEffect } from 'react';
// import { fetchProduct } from './api';
import NavbarMain from './NavbarMain';

function MainPage() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchProduct();
  //     setProducts(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <NavbarMain />
      <div className="container-fluid">
          <div className='jumbotron'>
        <p class="lead">Whats the deal?</p>
        <h1 class="display-4">BIGDEAL.SALE</h1>
        <hr class="my-4"/>
        <p>At BigDeal.Sale, top-notch products meet unbeatable sales! Explore, indulge, and grab the best before anyone else does!</p>
        <p>Ready to dive into a world of <strong>exclusive savings</strong>? Sign up now and never miss a deal!</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="/" role="button">Sign up</a>
        </p>
            {/* {products.map(product => (
              <div key={product.shortURL}>
                <img src={product.image} alt={product.actualURL} />
                <p>{product.price}</p>
              </div>
            ))} */}
          </div>
      </div>
    </>
  );
}

export default MainPage