import { useState, useContext } from 'react';
import { FaSearch } from "react-icons/fa";
import './Search.css'
import fetchData from '../api/fetchAPI';
import AppContext from '../context/AppContext';

function Search() {

    const [value, setValue] = useState('');

    const {setProducts} = useContext(AppContext);

    const handleSearch = async (event) => {
        event.preventDefault();
        const products = await fetchData(value);
        setProducts(products);
        setValue('');
    }

    return ( 
        <form className="search-bar" onSubmit={handleSearch} >
            <input title='Fill out this field and hit enter' value={value} onChange={({target}) => setValue(target.value)} type="search" placeholder="Search here..." className="search__input" required />
            <button title='Search' type="submit" className="search__button" ><FaSearch /></button>
        </form>
    );
}

export default Search;
