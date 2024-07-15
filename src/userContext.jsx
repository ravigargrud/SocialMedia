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
      posts: [{ title: 'SAMPLE', content: 'MY POTENTIAL' }, { title: 'SAMPLE', content: 'MY POTENTIAL' }]
    }
    setUser(userDetails);
  };

  const deletePost = (index) => {
    const newPosts = user.posts.filter((post, idx) => idx !== index);
    setUser({ ...user, posts: newPosts });
};

  return (
    <UserContext.Provider value={{ user, isUserSignedUp, signUpUser, deletePost }}>
        {children}
    </UserContext.Provider>
);
};

