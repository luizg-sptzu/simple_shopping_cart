import { useContext } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import AppContext from '../context/AppContext';
import { MdAttachMoney } from "react-icons/md";

function Cart() {
    const { cartItems, isVisible } = useContext(AppContext)

    const totalPrice = cartItems.reduce((acc, item) => {
        return item.price + acc;
    }, 0);

    return ( 
        <section className={`cart ${isVisible ? 'cart--active' : ''}`}>
            <div className="items">
                {cartItems.map((cartItem, index) => (<CartItem key={`${cartItem.title}-${cartItem.price}-${index}`} data={cartItem} />))}
            </div>
            <div className="overview">
                ${totalPrice.toFixed(2)}
                <button title='Proceed to payment'><MdAttachMoney /> Pay</button>
            </div>
        </section>
     );
}

export default Cart;
