import { useState } from "react"

function Likes(){
    const [likes, setLikes] = useState(1)
    function Up(){
        setLikes(likes+1)
    }
    function Down(){
        setLikes(likes-1)
    }
    return (
        <div className="content">
            <div className="likes_window">
                {likes}
            </div>
            <button className="up" onClick={Up}>up</button>
            <button className="down" onClick={Down}>down</button>
        </div>
    )
}

export default Likes;