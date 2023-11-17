
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
                    <div>Home</div>
                    <div>Create New Post</div>
                </div>
            </nav>
        </>
    )
}

export default Header