import React from 'react';
import "./header.css"
import Search from './Search';
import Utility from './Utility';

const Header = ({ handleChange }) => {
    return (
        <header className="App-header"> 
            <Search handleChange={handleChange} />
            <Utility />        
        </header>
    )
}


export default Header