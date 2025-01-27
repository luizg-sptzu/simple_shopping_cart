import Search from './Search';
import './Header.css'
import CartButton from './CartButton';

function Header() {
    return (
        <header className="header">
            <div className="container">

                <Search />
                
                <CartButton />

            </div>
        </header>
    )
}

export default Header;
