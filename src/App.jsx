import './App.css';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import SignUp from './components/signup.jsx'; // Ensure this import is correct
import { useState } from 'react';

function App() {
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

  return (
    <>
      <Navbar />
      {isUserSignedUp ? <Home user={user} setUser={setUser}/> : <SignUp signUpUser={signUpUser} />}
    </>
  );
}

export default App;
