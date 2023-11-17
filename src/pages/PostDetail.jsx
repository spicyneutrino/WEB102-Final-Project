import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import supabase from "../config/supaBaseClient"
import { useNavigate } from "react-router-dom"

const PostDetail = () => {
    const { id } = useParams()
    const [fetchError, setFetchError] = useState(null)
    const [post, setPost] = useState(null)
    const navigate = useNavigate()

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
                <div className="postDetailTopRow">
                    <div>
                        <h1>{post.postTitle}</h1>
                        <h2>{post.userName}</h2>
                        <div>
                            <div>Post ID: {post.postID}</div>
                            <div>Created at: {post.createTime}</div>
                        </div>
                    </div>
                    {post?.images && (
                        <img src={post.images} />
                    )}
                    <div className="postDetailBottomRow">
                        <p>{post.text}</p>
                    </div>
                </div>
            )}
            <button onClick={handleDelete} className="delete-post">Delete Post</button>
            <button onClick={() => { navigate("/") }}>Return Home</button>

        </div>
    )
}

export default PostDetail