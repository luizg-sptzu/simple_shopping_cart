import { FaShoppingCart } from "react-icons/fa";
import './CartButton.css'

function CartButton() {
    return ( 
        <button title="Your cart" className="cart__button">
            <FaShoppingCart />
            <span title="Product count" className="status">1</span>
        </button>
     );
}

export default CartButton;
