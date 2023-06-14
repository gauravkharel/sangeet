function Navbar() {
    return (
        <>
        <div className="navbar">
            <MainMenu />
            <Search />
            <Great />
        </div>
        </>
    )
}

export function MainMenu() {
    return (
        <section>
            <div aria-describedby="navigation-bar">
                <ul>
                    <li>
                        <button>
                            Icon
                            <h3>Home</h3>
                        </button>
                    </li>
                    <li>
                        <button>
                            Icon
                            <h3>Search</h3>
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export function Search() {
    return (
        <>
            <div>
                <div>
                    Icon
                    <h3>Your Library</h3>
                </div>
                <div>
                    Icon
                    Icon
                </div>
            </div>
            <div aria-describedby="search by">
                <ul>
                    <li>Playlists</li>
                    <li>Artists</li>
                    <li>Albums</li>
                    <li>Podcasts & Shows</li>
                </ul>
            </div>
        </>
    )
}

export function Great() {
    return (
        <h1>sdaid</h1>
    )
}

export default Navbar