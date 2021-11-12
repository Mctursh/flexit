import React, { useState } from "react"
import { Articles } from "./Content"
import { Header } from "./Header"
import { SubHeader } from "./SubHeader"
import QueryContext from "./context"

const Main = () => {

    const [query, setTheme] = useState('')

    const handleChange = (arg) => {
        setTheme(arg)
    }

    //5eezla-52H9juKvhS61ObIEmvRUIaAxxs1qFzZMXQg0   Access key
    //FJVJmN4t6U4HPKzZxRROvOc2pO7fVpGTOm4z6fzDXkU   Secret Key
    return (
        <QueryContext.Provider value={query}>
            {/* <Main handleToggle={handleToggle} /> */}
            <main className="main">
                <Header handleChange={handleChange} />
                <SubHeader />
                <Articles />
            </main>
    </QueryContext.Provider>
    )
}

export default Main