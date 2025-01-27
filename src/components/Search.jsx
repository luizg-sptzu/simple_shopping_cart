import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './Search.css'

function Search() {

    const [value, setValue] = useState('');

    return ( 
        <form className="search-bar">
            <input title='Fill out this field and hit enter' value={value} onChange={({target}) => setValue(target.value)} type="search" placeholder="Search here..." className="search__input" required />
            <button title='Search' type="submit" className="search__button" ><FaSearch /></button>
        </form>
    );
}

export default Search;
