
import PostBlock from "./PostBlock"

const Body = ({ posts }) => {
    if (posts === null) {
        return
    }

    return (
        <div>
            {posts.map((post) => {
                return <PostBlock post={post} key={post.id} />
            })}
        </div>
    )
}

export default Body