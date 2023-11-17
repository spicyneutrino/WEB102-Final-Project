import { NavLink } from "react-router-dom"

const Header = () => {

    return (
        <>
            <nav>
                <div className="brand-name">TALK4UM</div>
                <form>
                    <input type="text" placeholder="Search"></input>
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