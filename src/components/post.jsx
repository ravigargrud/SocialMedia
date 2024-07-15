import style from './post.module.css';
import viteLogo from '../assets/react.svg';

const Post = ({ postHead, postBody, deletePost }) => {
    return (
        <div className={style.Post}>
            <img src={viteLogo} alt=''/>
            <h1>{postHead}</h1>
            <p>{postBody}</p>
            <button onClick={deletePost}>Delete</button>
        </div>
    );
}

export default Post;
