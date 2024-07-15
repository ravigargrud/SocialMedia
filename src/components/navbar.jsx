import style from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.header}>
        <h1> SOCIAL MEDIA </h1>
        <nav className={style.navbar}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        </div>
    );
}

export default Navbar;