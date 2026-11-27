function Navbar() {
    return (
        <header>
            <nav className="bg-surface-light p-4 flex flex-row justify-start items-center gap-4 text-xl md:text-2xl xl:text-3xl">
                <a href="#" className="text-primary-strong text-2xl font-bold">
                    Citadel
                </a>
                {/* TODO: enlaces de navegacion */}
                <ul>
                    <li>
                        <a href="#games">Videojuegos</a>
                    </li>
                    <li>
                        <a href="#features">Características</a>
                    </li>
                    <li>
                        <a href="#pricing">Planes</a>
                    </li>
                </ul>

                <button type="button">
                    Panel de control
                </button>
                {/* TODO: menu para moviles */}
                {/* TODO: selector de tema */}
            </nav>
        </header>
    )
}

export default Navbar
