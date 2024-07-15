import Post from './post.jsx';

const Posts = ({ user, setUser }) => {
    console.log(user);
    const onClickDeletePost = (index) => {
        const newPosts = user.posts.filter((post, idx) => idx !== index);
        setUser({ ...user, posts: newPosts });
    }

    return (
        <>
            {user.posts.map((post, index) => (
                <Post key={index} postHead={post.title} postBody={post.content} deletePost={() => onClickDeletePost(index)} />
            ))}
        </>
    );
}

export default Posts;
