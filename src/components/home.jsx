// import { useContext } from 'react';
import Posts from './posts.jsx';
import Profile from './profile.jsx';
import style from './home.module.css';

const Home = () => {
    return (
        <div className={style.Home}>
            <div className={`${style.HomeDiv} ${style.Posts}`}>
                <Posts/>
            </div>
            <div className={`${style.HomeDiv} ${style.Profile}`}>
                <Profile />
            </div>
        </div>
    );
}

export default Home;
