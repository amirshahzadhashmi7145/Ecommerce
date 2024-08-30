import ProductCard from "../components/ProductCard";
import backdrop from "bootstrap/js/src/util/backdrop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=8').then((response) => {setTrendingProducts(response.data)})

        axios.get('https://fakestoreapi.com/products').then((response) => {setNewProducts(response.data)})
        setLoading(false)
    }, []);

    return (
        <div>
            <Header />
            <div className='py-5' style={{backgroundColor: '#E3EDF6'}}>
                <div className='container-fluid row py-5' style={{paddingLeft: '14%', paddingRight: '14%'}}>
                    <div className="col-12 col-md-6 d-flex justify-content-center flex-column align-items-start">
                        <h1 className='pb-1'>The Best notebook collection 2024</h1>
                        <h2 className='pb-2'>Exclusive offer -10% off this week</h2>
                        <button className='btn btn-light py-2'>Shop Now</button>
                    </div>
                    <div className="col-12 col-md-6">
                        <img width='100%' height='100%' src="https://shopify-xrh7.onrender.com/hero.png"/>
                    </div>
                </div>
            </div>

            <div className='container row mt-5 mx-auto text-center'>
                <div className='d-flex flex-column col-md col-12 mx-2 my-2 pt-3' style={{backgroundColor: '#F3F4F6'}}>
                    <div className='h5'>Free Delivery</div>
                    <p>Orders from all items</p>
                </div>
                <div className='d-flex flex-column col-md col-12 mx-2 my-2 pt-3' style={{backgroundColor: '#F3F4F6'}}>
                    <div className='h5'>Return & Refund</div>
                    <p>Money back guarantee</p>
                </div>
                <div className='d-flex flex-column col-md col-12 mx-2 my-2 pt-3' style={{backgroundColor: '#F3F4F6'}}>
                    <div className='h5'>Member Discount</div>
                    <p>On order over $99</p>
                </div>
                <div className='d-flex flex-column col-md col-12 mx-2 my-2 pt-3' style={{backgroundColor: '#F3F4F6'}}>
                    <div className='h5'>Support 24/7</div>
                    <p>Contact us 24 hours a day</p>
                </div>
            </div>

            <div className='container'>
                <h1 className='ps-3 pt-5'>Trending Products</h1>
                <div className='d-flex flex-wrap justify-content-evenly'>
                    {!loading && trendingProducts.map((product) => (
                        <div className='m-3'>
                            <ProductCard price={product.price} title={product.title} description={product.description} image={product.image} category={product.category}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className='container d-flex my-5'>
                <div style={{maxWidth:"50%"}}>
                    <img width='100%' height='100%' src='https://shopify-xrh7.onrender.com/banner.jpg' />
                </div>
                <div>

                </div>
                <div className='container-fluid d-flex flex-column justify-content-center align-items-center mx-auto' style={{backgroundColor:'#E3EDF6'}}>
                    <div className='h1'>Don't miss the offer</div>
                    <div className='h2'>Grab it now</div>
                    <button className='btn btn-light'>Shop Now</button>
                </div>
            </div>

            <div className='container'>
                <h1 className='ps-3 pt-5'>New Arrivals</h1>
                <div className='d-flex flex-wrap justify-content-evenly'>
                    {!loading && newProducts.map((product) => (
                        <div className='m-3'>
                            <ProductCard price={product.price} title={product.title} description={product.description} image={product.image} category={product.category}/>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Home;