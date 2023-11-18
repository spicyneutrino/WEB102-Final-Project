
import PostBlock from "./PostBlock"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Body = ({ posts, setOrderBy, setIsAscending }) => {
    const [order, setOrder] = useState("postID")
    if (!posts) {
        return
    }

    const handleSortChange = (e) => {
        e.preventDefault()
        setOrderBy(order)
    }

    const handleAscending = (e) => {
        e.preventDefault
        setIsAscending((prevValue) => !prevValue)
    }

    return (
        <div className="body-jsx">
            <div className="sort-area">
                <form onSubmit={handleSortChange} >
                    <label htmlFor="sortBy"><span>Sort By </span>
                        <select onChange={(e) => { setOrder(e.target.value) }} id="sortBy">
                            <option value="postID">Post ID</option>
                            <option value="postTitle">Post Title</option>
                            <option value="createTime">Date</option>
                            <option value="upvotes">Upvotes</option>
                            <option value="replies">Replies</option>
                        </select>
                    </label>
                    <button>Sort</button>
                </form>
                <button onClick={handleAscending}>Reverse</button>
            </div>
            <br />
            <div className="postBlockContainer">
            {posts.map((post) => {
                return (
                    <NavLink to={`/info/${post.postID}`} key={post.postID} >
                        <PostBlock post={post} />
                    </NavLink>
                )
            })}
            </div>
        </div >
    )
}

export default Body