

const PostBlock = ({ post }) => {

    return (
        <div className="post-container">
            <div className="post-block-data">
                <div className="postID">{post.postID}</div>
                <div className="createTime">{post.createTime}</div>
                <div className="userName">{post.userName}</div>
            </div>
            <div className="post-block-title">
                {post.postTitle}
            </div>
        </div>
    )
}

export default PostBlock