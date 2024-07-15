const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-lg">
            <h1 className="text-2xl font-bold">SOCIAL MEDIA</h1>
            <nav className="flex space-x-4">
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-blue-500 hover:text-blue-700">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-500 hover:text-blue-700">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-500 hover:text-blue-700">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
