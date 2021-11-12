import React from "react";

const Picture = ({url}) => {
    // const url = "https://images.unsplash.com/photo-1633956299095-3c82acc2bdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzY3MTM5MDY&ixlib=rb-1.2.1&q=80&w=400"
    return (
        <article style={{ backgroundImage: `url(${url})` }}>
            <div className="status-parent">
                <div className="status"></div>
                <div className="status"></div>
                <div className="status"></div>
                <div className="status"></div>
            </div>
            <div className="info">
                <p>Jack, 22</p>
                <p><span><i className="fas fa-map-marker-alt"></i></span> Florida, USA</p>
            </div>
        </article>
    )
}

export default Picture