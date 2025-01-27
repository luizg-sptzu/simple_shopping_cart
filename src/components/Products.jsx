import { useState, useEffect } from 'react';
import './Products.css';
import fetchData from '../api/fetchAPI';
import ProductCard from './ProductCard';

function Products() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetchData('').then((response) => {
            setProducts(response);
            console.log(products);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ( 
        <section className="products container">
            
            {
                products.map((product) => <ProductCard key={product.id} info={product} />)
            }
            
        </section>
     );
}

export default Products;
