import React, { useState } from 'react';
import "./sidebar.css"
import SideBarItem from './SideBarItem';


const SideBar = () => {
    const [active, setActive] = useState(0)
    const handleClick = (idx) => {
        setActive(idx)
    }
    const items = [
        {
            name: "Home",
            icon: "home"
        },
        {
            name: "Message",
            icon: "sticky-note"
        },
        {
            name: "",
            icon: ""
        },
        {
            name: "Ranking",
            icon: "chart-bar"
        },
        {
            name: "Challenge",
            icon: "mountains"
        },
        {
            name: "Party",
            icon: "glass-cheers"
        },
        {
            name: "Connect",
            icon: "link"
        },
        {
            name: "Parade",
            icon: "male"
        },
        {
            name: "Group",
            icon: "users"
        },
    ]
    return (
        <aside>
            <header>
                <div className="sidebar-header" >
                    <i className="fas fa-square"></i>
                    <h2>bluecube</h2>
                </div>
            </header>
            <main>
                <ul>
                    {items.map(({name, icon}, idx) => {
                        if (idx === 2) {
                            return (<li>                    
                                <div className="sidebar-item-parent">
                                    <h4>SHARE</h4>
                                </div>
                            </li>   ) 
                        } else {
                           return <SideBarItem handleClick={handleClick} idx={idx} active={active} key={idx} name={name} icon={icon} />
                        }
                    })}
                </ul>
            </main>
        </aside>
    )
}

export default SideBar