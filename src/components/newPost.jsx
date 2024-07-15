import { useContext } from "react"
import { UserContext } from "../userContext.jsx"

const NewPost = () => {
    const {addPost} = useContext(UserContext);

    return (
        <div className="m-4">
            <h1 className="text-2xl font-bold mb-4">New Post</h1>
            <form className="flex flex-col space-y-4" onSubmit={addPost}>
                <input
                    className="border border-gray-300 rounded-md p-2"
                    id="postTitle"
                    type="text"
                    placeholder="Enter post title"
                />
                <textarea
                    className="border border-gray-300 rounded-md p-2"
                    id="postContent"
                    placeholder="Enter post content"
                ></textarea>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4"
                    type="submit"
                >
                    Add Post
                </button>
            </form>
        </div>
    );
}

export default NewPost;