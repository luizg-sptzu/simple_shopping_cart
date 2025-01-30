import PropTypes from 'prop-types';
import './ProductCard.css'
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useContext } from 'react';
import AppContext from '../context/AppContext';

function ProductCard({info}) {
    const { title, images, price, rating, category } = info;

    const { cartItems, setCartItems } = useContext(AppContext);

    const handleAddCart = () => setCartItems([ ...cartItems, info ]);

    return ( 
        <section className="product-card">
            <img src={images[0]} alt="image" className="card__image"/>
            <div className="card__information">
                <h3 className="price">${price}</h3>
                <h2 className="title">{title} | <FaStar /> {rating}</h2>
                <h4 className='category'>{category}</h4>
            </div>
            <button onClick={handleAddCart} title='Add to cart' className="add"><FaPlus /></button>
        </section>
     );
}

export default ProductCard;

ProductCard.propTypes = {
    info: PropTypes.shape({}),
}.isRequired;
