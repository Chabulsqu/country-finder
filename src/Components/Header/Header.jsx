import './Header.css';

export default function Header({mode, switchModes}) {
        return (
            <header>
                <h1>Where in the world?</h1>
                <button onClick={switchModes}>
                    <i className={mode === 'light' ? 'fas fa-sun' : 'fa-solid fa-moon'}></i>
                    <em>{mode === 'light' ? 'Light Mode' : 'Dark Mode'}</em>
                </button>
            </header>
        )
}