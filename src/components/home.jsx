// import { useContext } from 'react';
import Posts from './posts.jsx';
import Profile from './profile.jsx';
import style from './home.module.css';

const Home = () => {
    return (
        <div className="flex">
            <div className="w-1/2">
                <Posts/>
            </div>
            <div className="w-1/2">
                <Profile />
            </div>
        </div>
    );
}

export default Home;
