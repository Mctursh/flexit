import React from "react"


const Notify = ({action, time, name}) => {
    return (
        <div className="notification-item">
                <img src="profile.png" alt="profile" />
                <div>
                    <h5>{name} {action == "heart" ? "liked you!" : "Commented on your photo"}</h5>
                    <h6>About {time} minutes ago.</h6>
                </div>
                <i className={`fas fa-${action}`}></i>
            </div>
        
    )
}
export default Notify