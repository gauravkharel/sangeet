import AudioPlayer from './components/AudioPlayer';
 
import './App.css'
function App() {
  return (
      <div className="app">
        <StickyHeader />
        <Navbar />
         <main>
          <div>ihi</div>
          {/* Maisn content goes here */}
         </main>
         <AudioPlayer />
    </div>
  )
}

function StickyHeader(){
  return(
    <header className="sticky-header">
      <div className="arrow-keys">
        <ul>
          <li>
            <button>left</button>
          </li>
          <li>
            <button>right</button>
          </li>
        </ul>
      </div>
      <div className="user-options">
        <ul>
          <li>
            <button>Explore premium</button>
          </li>
          <li>
            <button>
              <img src="" alt="" />
              Install App
            </button>
          </li>
          <li>
            <nav>user</nav>
          </li>

        </ul>
      </div>
    </header>
  )
}

function Navbar(){
  return (
    <nav className="navbar">
       <div aria-describedby="navigation-bar">
                <ul>
                    <li>
                        <button >
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
    </nav>
  )
}
 function MainMenu() {
    return (
        <>
            <div aria-describedby="navigation-bar">
                <ul>
                    <li>
                        <button >
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
            
        </>
    )
}

 function Search() {
    return (
        <>
            <section>
                <div>
                    Icon
                    <h3>Your Library</h3>
                </div>
                <div>
                    Icon
                    Icon
                </div>
            </section>
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


export default App