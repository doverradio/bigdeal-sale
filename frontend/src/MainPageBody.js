import React from "react";
import UrlShortenerForm from "./UrlShortenerForm";

const MainPageBody = () =>
{
    return(
        <>
            <div className="container-fluid main-content">
                <div className='jumbotron'>
            <p class="lead">Whats the deal?</p>
            <h1 class="display-4">BIGDEAL.SALE</h1>
            <hr class="my-4"/>
            <p>At BigDeal.Sale, top-notch products meet unbeatable sales! Explore, indulge, and grab the best before anyone else does!</p>
            <p>Ready to dive into a world of <strong>exclusive savings</strong>? Sign up now and never miss a deal!</p>
            <br />
            {/* <p class="lead">
                <a class="btn btn-primary btn-lg" href="/signup" role="button">Sign up</a>
            </p> */}
            <p class="lead">
                <UrlShortenerForm />
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
    )
}

export default MainPageBody