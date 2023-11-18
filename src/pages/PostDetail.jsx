import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import supabase from "../config/supaBaseClient"
import { useNavigate } from "react-router-dom"

const PostDetail = () => {
    const { id } = useParams()
    const [fetchError, setFetchError] = useState(null)
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const [reply, setReply] = useState("")

    const handleUpvotes = async () => {

        const { data, error } = await supabase
            .from("posts")
            .update({
                "upvotes": post.upvotes + 1
            })
            .eq("postID", id)
            .select()

        setPost((prevPost) => ({
            ...prevPost,
            upvotes: post.upvotes + 1
        })
        )
    }

    const handleAddReply = async (e) => {
        e.preventDefault()
        if (!reply.trim() || reply === "") {
            alert("Reply cannot be empty")
            return
        }

        const { data, error } = await supabase
            .from("posts")
            .update({
                "replies": [...post.replies, reply]
            })
            .eq("postID", id)
            .select()

        setPost((prevPost) => {
            return ({
                ...prevPost,
                "replies": [...prevPost.replies, reply]
            })
        })
    }

    const handleDelete = async () => {
        const { data, error } = await supabase
            .from("posts")
            .delete()
            .eq("postID", id)
            .select()

        console.log(data, error)
        if (error) {
            setFetchError(error)
            return
        }
        if (data) {
            setFetchError(null)
        }
        navigate("/")

    }

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from("posts")
                .select()
                .eq("postID", id)
                .single()

            console.log(data, error)
            if (error) {
                setFetchError(error)
                setPost(null)
            }
            if (data) {
                setPost(data)
                setFetchError(null)
            }
        }
        fetchPost()

    }, [])
    return (
        <div>
            {fetchError && (
                <div className="error-message">{fetchError}</div>
            )}

            {post && (

                <div className="postDetailPage">
                    <div className="postDetailTopRow">
                        <div className="flexbox">
                            <h1>{post.postTitle}</h1>
                            <h2>{post.userName}</h2>
                            <div>
                                <div>Post ID: {post.postID}</div>
                                <div>Created at: {post.createTime}</div>
                                <div>{`${post.upvotes} upvotes`}</div>
                            </div>
                        </div>
                        {post?.images && (
                            <img src={post.images} />
                        )}
                    </div>

                    <div className="buttonRow">
                        <button onClick={handleUpvotes} className="BtnEmoji">⬆️</button>
                        <button onClick={() => { navigate(`/update/${id}`) }} className="updatePost">Update Post</button>
                        <button onClick={handleDelete} className="delete-post">Delete Post</button>
                        <button onClick={() => { navigate("/") }}>Return Home</button>
                    </div>

                    <div className="postDetailBottomRow">
                        <p>{post.text}</p>
                    </div>

                    <div className="addReplyFormDiv">
                        <form onSubmit={handleAddReply}>
                            <input type="text" placeholder="Enter your reply" value={reply} onChange={(e) => { setReply(e.target.value) }} />
                            <button>Reply</button>
                        </form>
                    </div>

                    <div className="postRepliesContainer">
                        <div className="comment-heading">Comments</div>
                        {(post.replies.length === 0) && (
                            "No Replies 😓"
                        )}
                        {(post.replies) && (post.replies.map((reply, index) => {
                            return <div key={index} className="postReplies">{reply}</div>
                        }))}
                    </div>

                </div>
            )}


        </div>
    )
}

export default PostDetail