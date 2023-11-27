import "react"
import { useState } from "react"
import "react-dom"

root = ReactDOM.createRoot(document.getElementById("root"))

function Likes(){
    const [likes, setLikes] = useState(1)
    return (
        <div className="content">
            <div className="likes_window">
                {likes}
            </div>
            <button className="up" onClick={setLikes(++likes)}>up</button>
            <button className="down" onClick={setLikes(++likes)}>down</button>
        </div>
    )
}

root.render(
    <>
        <Likes />
        <br />
        <Likes />

    </>
)