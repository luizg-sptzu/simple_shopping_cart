import { FaShoppingCart } from "react-icons/fa";
import './CartButton.css'
import { useContext } from "react";
import AppContext from "../context/AppContext";

function CartButton() {
    const {cartItems, isVisible, setIsVisible} = useContext(AppContext);
    
    return ( 
        <button onClick={() => setIsVisible(!isVisible)} title="Your cart" className="cart__button">
            <FaShoppingCart />
            {cartItems.length > 0 && <span title="Product count" className="status">{cartItems.length}</span>}
        </button>
     );
}

export default CartButton;
