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
            <h3>Shorten URLs.</h3>
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