

const PostBlock = ({ post }) => {

    if (!post) {
        return null
    }

    return (
        <div className="post-container">
            <div className="post-block-data">
                <div className="postID">{post.postID}</div>
                <div className="createTime">{post.createTime}</div>
                <div className="userName">{post.userName}</div>
            </div>
            <div className="upvoteTitle">
                <div className="upvotes">
                    {`${post.upvotes} votes`}
                </div>
                <div className="post-block-title">
                    {post.postTitle}
                </div>
            </div>

        </div>
    )
}

export default PostBlock