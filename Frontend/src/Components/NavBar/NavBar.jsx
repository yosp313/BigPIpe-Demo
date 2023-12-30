

export default function NavBar(){

    return (
        <>
            <nav className="navBar">
                <a href="/" className="site-title">SGS</a>
                <ul>
                    <li>
                        <a href="/Team">Team</a>
                    </li>
                    <li>
                        <a href="/aboutUs">About Us</a>
                    </li>

                </ul>
            </nav>
        </>
    )
}