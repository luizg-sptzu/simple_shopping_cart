import { useEffect } from 'react';
import './Products.css';
import fetchData from '../api/fetchAPI';
import ProductCard from './ProductCard';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

function Products() {
    const {products, setProducts} = useContext(AppContext);
    
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
