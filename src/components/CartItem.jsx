import { useContext } from 'react';
import './CartItem.css'
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function CartItem({data}) {
    const {id, images, title, price} = data;
    const {cartItems, setCartItems} = useContext(AppContext);
    
    const handleRemove = () => {
        const updatedItems = cartItems.filter((item) => item.id != id);
        setCartItems(updatedItems);
    }

    return ( 
        <section className='cart-item'>
            <img src={images[0]} alt="img" className='cart-item-image' />
            <div className='cart-item-info'>
                <h3 className='cart-item-title'>{title}</h3>
                <h4 className='cart-item-price'>${price}</h4>
                <button onClick={handleRemove} title='Remove' className='button__remove'>X</button>
            </div>
        </section>
     );
}

export default CartItem;

CartItem.propTypes = {
    data: PropTypes.object
}.isRequired;
