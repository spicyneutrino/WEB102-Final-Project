import { useState, useEffect } from "react"
import supabase from "../config/supaBaseClient"
import { Navigate } from "react-router-dom"

const Create = () => {

    //states
    const [userName, setUserName] = useState("")
    const [postTitle, setPostTitle] = useState("")
    const [postDescription, setPostDescription] = useState("")
    const [imageSrc, setImageSrc] = useState("")
    const [formError, setFormError] = useState(null)



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!postTitle || !postDescription || !userName) {
            setFormError("Enter the fields correctly")
            return
        }
        setFormError("Enter the fields correctly")

        const { data, error } = await supabase
            .from("posts")
            .insert([{
                "userName": userName,
                "images": imageSrc,
                "postTitle": postTitle,
                "text": postDescription
            }])
            .select()

        if (error) {
            console.log(error)
            setFormError(error)
        }
        if (data) {
            setFormError(null)
        }
        Navigate("/")

    }

    return (
        <div className="createPage">
            <form onSubmit={handleSubmit}>

                <label htmlFor="userName">Enter User Name:</label>
                <input type="text" name="userName" value={userName} id="userName" onChange={(e) => setUserName(e.target.value)} />

                <label htmlFor="postTitle">Enter Post Title:</label>
                <input type="text" name="post title" value={postTitle} id="postTitle" onChange={(e) => setPostTitle(e.target.value)} />

                <label htmlFor="postDescription">Enter Post Description:</label>
                <input type="text" name="post description" value={postDescription} id="postDescription" onChange={(e) => setPostDescription(e.target.value)} />

                <label htmlFor="imageSrc">Enter image link:</label>
                <input type="text" name="post image" value={imageSrc} id="imageSrc" onChange={(e) => setImageSrc(e.target.value)} />

                <p>{formError}</p>

                <button>Add Post</button>
            </form>
        </div>
    )
}

export default Create