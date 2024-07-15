import React, {createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [isUserSignedUp, setIsUserSignedUp] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        posts: [{ title: '', content: '' }]
    });

  const signUpUser = (e) => {
    e.preventDefault();
    setIsUserSignedUp(true);
    const userDetails = {
      name: e.target.userName.value,
      email: e.target.userEmail.value,
      password: e.target.userPassword.value,
      posts: []
    }
    setUser(userDetails);
  };

  const deletePost = (index) => {
    const newPosts = user.posts.filter((post, idx) => idx !== index);
    setUser({ ...user, posts: newPosts });
};

const addPost = (e) => {
    e.preventDefault();
    const newPost = {
        title: e.target.postTitle.value,
        content: e.target.postContent.value
    };
    setUser({ ...user, posts: [...user.posts, newPost] });
    e.target.postTitle.value = '';
    e.target.postContent.value = '';
};

  return (
    <UserContext.Provider value={{ user, isUserSignedUp, signUpUser, deletePost, addPost }}>
        {children}
    </UserContext.Provider>
);
};

