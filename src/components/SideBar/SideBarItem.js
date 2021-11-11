import React from 'react';

const SideBarItem = ({ name, icon, active, idx, handleClick }) => {
    return (
        <div onClick={() => handleClick(idx) } className={`sidebar-item-parent ${active == idx && "active"}`}>
            {icon && <i className={`fas fa-${icon}`}></i>}
            <p>{name}</p>
        </div>
    )
}

export default SideBarItem