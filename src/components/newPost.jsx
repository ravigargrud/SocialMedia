import { useContext } from "react"
import { UserContext } from "../userContext.jsx"
import style from './newPost.module.css';

const NewPost = () => {
    const {addPost} = useContext(UserContext);

    return (
        <>
        <h1 className={style.heading}>New Post</h1>
        <form className={style.form} onSubmit={addPost}>
            <input className={style.postTitle} id="postTitle" type="text" placeholder="Enter post title" />
            <textarea className={style.postBody} id="postContent" placeholder="Enter post content"></textarea>
            <button className={style.submitButton} type="submit">Add Post</button>
        </form>
        </>
    );
}

export default NewPost;