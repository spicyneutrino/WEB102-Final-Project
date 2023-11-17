
import PostBlock from "./PostBlock"
import { NavLink } from "react-router-dom"

const Body = ({ posts }) => {
    if (!posts) {
        return
    }

    return (
        <div>
            {posts.map((post) => {
                return (
                    <NavLink to={`/info/${post.postID}`} key={post.postID} >
                        <PostBlock post={post} />
                    </NavLink>
                )
            })}
        </div >
    )
}

export default Body