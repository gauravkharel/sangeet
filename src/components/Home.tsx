const topPicks = [
    {
        name: 'J. Cole',
        key: 1,
        cover_url: "hdauihdas.com"
    },
    {
        name: 'Talha Anjum',
        key: 2,
        cover_url: "hdauihdas.com"
    },
    {
        name: 'Kendrick Lamar',
        key: 3,
        cover_url: "hdauihdas.com"
    }
]

function Home() {
    return (
        <div>
            <TopPicks />
        </div>
    );
}



function TopPicks() {
    return (
        <div>
            Top Picks
            <ul>
                {topPicks.map(topPicks => (
                    <li key={topPicks.id}>
                        {topPicks.name}
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Home;