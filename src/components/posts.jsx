import Post from './post.jsx';
import { UserContext } from '../userContext.jsx';
import { useContext } from 'react';

const Posts = () => {
    const { user, setUser, deletePost } = useContext(UserContext);

    return (
        <>
            {user.posts.length === 0 && <h1>No posts to show</h1>}
            <div className='flex flex-wrap overflow-auto h-[90vh] justify-center items-center'>
            {user.posts.map((post, index) => (
                <Post key={index} postHead={post.title} postBody={post.content} deletePost={() => deletePost(index)} />
            ))}
            </div>
        </>
    );
}

export default Posts;
