import Post from './post.jsx';
import { UserContext } from '../userContext.jsx';
import { useContext } from 'react';

const Posts = () => {
    const { user, setUser, deletePost } = useContext(UserContext);

    return (
        <>
            {user.posts.map((post, index) => (
                <Post key={index} postHead={post.title} postBody={post.content} deletePost={() => deletePost(index)} />
            ))}
        </>
    );
}

export default Posts;
