import './App.css';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import SignUp from './components/signup.jsx';
import { UserContext } from './userContext.jsx';
import { useContext } from 'react';

function App() {

  const { isUserSignedUp } = useContext(UserContext);

  return (
    <>

    <Navbar />
    {isUserSignedUp ? <Home/> : <SignUp/>}
    </>
  );
}

export default App;
