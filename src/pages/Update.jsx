import { useState, useEffect } from "react"
import supabase from "../config/supaBaseClient"
import { useNavigate, useParams } from "react-router-dom"

const Update = () => {

    const [userName, setUserName] = useState("")
    const [postTitle, setPostTitle] = useState("")
    const [postDescription, setPostDescription] = useState("")
    const [imageSrc, setImageSrc] = useState("")
    const [formError, setFormError] = useState(null)

    const { id } = useParams()
    const navigate = useNavigate()

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!postTitle || !postDescription || !userName) {
            setFormError("Enter the fields correctly")
            return
        }

        const { data, error } = await supabase
            .from("posts")
            .update({
                "userName": userName,
                "images": imageSrc,
                "postTitle": postTitle,
                "text": postDescription
            })
            .eq("postID", id)
            .select()

        if (error) {
            console.log(error)
            setFormError(error)
            return
        }
        if (data) {
            setFormError(null)
        }
        navigate("/")

    }

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("posts")
                .select("*")
                .eq("postID", id)
                .single()

            console.log(data, error)

            if (error) {
                setFormError(error)
            }
            if (data) {
                setFormError(null)
                setUserName(data.userName || "")
                setPostTitle(data.postTitle || "")
                setPostDescription(data.text || "")
                setImageSrc(data?.images || "")
            }
        }
        fetchData()
    }, [id, navigate])
    return (
        <div className="createPage">
            <form onSubmit={handleUpdate}>

                <label htmlFor="userName">Enter User Name:</label>
                <input type="text" name="userName" value={userName} id="userName" onChange={(e) => setUserName(e.target.value)} />

                <label htmlFor="postTitle">Enter Post Title:</label>
                <input type="text" name="post title" value={postTitle} id="postTitle" onChange={(e) => setPostTitle(e.target.value)} />

                <label htmlFor="postDescription">Enter Post Description:</label>
                <input type="text" name="post description" value={postDescription} id="postDescription" onChange={(e) => setPostDescription(e.target.value)} />

                <label htmlFor="imageSrc">Enter image link:</label>
                <input type="text" name="post image" value={imageSrc} id="imageSrc" onChange={(e) => setImageSrc(e.target.value)} />

                <p>{formError}</p>

                <div className="button-row">
                    <button>Update Post</button>
                    <button onClick={() => { navigate("/") }}>Return Home</button>
                </div>
            </form>
        </div>
    )
}

export default Update