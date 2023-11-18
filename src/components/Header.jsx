import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Header = ({ posts, copyPosts, setPosts, setCopyPosts }) => {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        let newList = []
        if (!searchTerm || searchTerm.trim().length === 0) {
            setCopyPosts(posts)
            return
        }
        for (let cPost of copyPosts) {
            if (cPost.postTitle.toLowerCase().includes(searchTerm)) {
                newList.push(cPost)
            }
        }
        setCopyPosts(newList)
        navigate("/")
    }

    return (
        <>
            <nav className="header">
                <div className="brand-name">TALK4UM</div>
                <form onSubmit={handleSearch} className = "searchBar-Btn">
                    <input type="text" placeholder="Search" onChange={(e) => { setSearchTerm(e.target.value) }}></input>
                    <button>🔍</button>
                </form>

                <div className="nav-links">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/create" >Create New Post</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Header