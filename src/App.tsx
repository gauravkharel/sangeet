function App() {
  return (
    <>
      <MainMenu />
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

export function MainMenu() {
  return (
    <section>
      <div aria-describedby="navigation-bar">
        <ul>
          <li>
            Icon
            <h3>Home</h3>
          </li>
          <li>
            Icon
            <h3>Home</h3>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default App
