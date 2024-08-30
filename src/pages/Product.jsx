import ProductCard from "../components/ProductCard";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {setProducts(response.data);setLoading(false)})
    }, []);

    return (
        <div>
            <Header/>
            <div className='container'>
                <h1 className='ps-3 pt-5'>All Products</h1>
                <div className='d-flex flex-wrap justify-content-center'>
                    {!loading && products.map((product) => (
                        <div className='m-3'>
                            <ProductCard image={product.image} title={product.title} description={product.description}
                                         category={product.category} price={product.price}/>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Product;