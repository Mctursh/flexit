import React from "react";
import Category from "./Category";
import "./sub-header.css"

const SubHeader = () => {

    const categories = ["World", 'following', 'popular', 'post', "gender", "location", "culture", "vintage"]
    return (
        <section className="categ-parent">
            {categories.map((i, idx) => <Category seperator={idx == (categories.length - 1) ? false : true} key={idx} name={i} />)}
        </section>
    )
}

export default SubHeader