import React, { useState } from "react";
import Notify from "./Notify";


const Utility = () => {
    const [notify, setNotify] = useState(false)

    const handleNotify = () => {
        setNotify(!notify)
    }
    return (
        <div className="utilities" >
            <div className="notification">
                <i onClick={() => handleNotify()} className="fas fa-bell"></i>
                <span id="notify">3</span>
                {notify && <div className="notification-dropdown">
                    <Notify action="heart" name="Aiden" time="30" />
                    <Notify action="comment" name="Angela" time="50" />
                    <Notify action="heart" name="Chioma" time="25" />                    
                </div>}            
            </div>
            <div id="photo">
                <img src="profile.png" alt="profile" />
                <span></span>
            </div>
            <div className="name">
                <p>Aiden</p>
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
    )
}

export default Utility