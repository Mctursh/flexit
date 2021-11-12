import React from 'react';
import "./header.css"
import Search from './Search';
import Utility from './Utility';

const Header = () => {
    return (
        <header className="App-header"> 
            <Search />
            <Utility />        
        </header>
    )
}


export default Header