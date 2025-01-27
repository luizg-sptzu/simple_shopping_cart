import PropTypes from 'prop-types';
import './ProductCard.css'
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function ProductCard({info}) {
    const { title, images, price, rating, category } = info;
    
    return ( 
        <section className="product-card">
            <img src={images[0]} alt="image" className="card__image"/>
            <div className="card__information">
                <h3 className="price">${price}</h3>
                <h2 className="title">{title} | <FaStar /> {rating}</h2>
                <h4>{category}</h4>
                <h4></h4>
            </div>
            <button title='Add to cart' className="add"><FaPlus /></button>
        </section>
     );
}

export default ProductCard;

ProductCard.propTypes = {
    info: PropTypes.shape({}),
}.isRequired;
