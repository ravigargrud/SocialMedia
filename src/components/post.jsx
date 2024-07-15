import style from './post.module.css';
import viteLogo from '../assets/react.svg';

const Post = ({ postHead, postBody, deletePost }) => {
    return (
     <div className="bg-gradient-to-r from-background to-secondary text-primary-foreground p-4 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <div className="flex items-center">
        <img className="h-12 w-12 rounded-full" src="https://placehold.co/50x50" alt="user-avatar" />
        <div className="ml-4">
          <h2 className="font-bold">John Doe</h2>
          <p className="text-sm text-secondary-foreground">Posted 2 hours ago</p>
        </div>
      </div>
      <p className="mt-4 text-foreground"><b>{postHead}</b> <br></br> {postBody}</p>
      <img className="mt-4 rounded-lg" src="https://placehold.co/400x300" alt="post-image" />
      <div className="flex justify-between mt-4">
        <button className="flex items-center text-secondary-foreground hover:text-secondary">
          <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
          <span>Like</span>
        </button>
        <button onClick={deletePost} className="flex items-center text-secondary-foreground hover:text-secondary">
          <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Delete</span>
        </button>
        <button className="flex items-center text-secondary-foreground hover:text-secondary">
          <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>Share</span>
        </button>
      </div>
    </div>
    );
}

export default Post;
