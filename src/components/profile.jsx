import NewPost from './newPost.jsx';
import { useContext } from 'react';
import { UserContext } from '../userContext.jsx';

const Profile = () => {
    const { user } = useContext(UserContext);
    return (
        <>
        <div className="bg-gray-200 p-4 m-4">
            <h1 className="text-2xl font-bold">Profile</h1>
            <h2 className="text-xl">Welcome, {user.name}</h2>
            <p className="mt-2">Email: {user.email}</p>
            <p className="mt-2">No. of Posts: {user.posts.length}</p>
        </div>
        <NewPost />
        </>
    );
    }

export default Profile;