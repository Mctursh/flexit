import React, { useEffect, useState, useContext } from "react";
import Picture from "./Picture";
import "./article.css"
import QueryContext from "../context";

const Article = () => {
    const currQuery = useContext(QueryContext)
    const queryURI = `https://api.unsplash.com/photos/random/?client_id=5eezla-52H9juKvhS61ObIEmvRUIaAxxs1qFzZMXQg0&count=20&query=${currQuery}`
    const [ images, setImages ] = useState([])
    const [ present, setPresent ] = useState(true)
    const [query, setQuery] = useState("")
    const url = "https://api.unsplash.com/photos/random/?client_id=5eezla-52H9juKvhS61ObIEmvRUIaAxxs1qFzZMXQg0&count=20"

    const _fetch = async (uri) => {
        setPresent(true)
        fetch(uri)
            .then((res) => {
            //Handling errors 
            if (!res.ok) {             
                throw Error()
            } else {
                return res.json()
            }
        }).then(data => {
            // console.log(data);
            setImages(data)
            setPresent(false)
        })
    }

    useEffect(() => {
        _fetch(queryURI)
    }, [currQuery])
    return (
        <main className="picture-parent">
            {present ? <h1>Loading...</h1> : images.map((i, idx) => <Picture key={idx} url={i.urls.small} />)}
        </main>
    )
}

export default Article