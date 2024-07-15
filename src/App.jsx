import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import SignUp from './components/signup.jsx';
import { UserContext } from './userContext.jsx';
import { useContext } from 'react';
import './App.css';

function App() {

  const { isUserSignedUp } = useContext(UserContext);

  return (
    <div className="App bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
    <Navbar />
    {isUserSignedUp ? <Home/> : <SignUp/>}
    </div>
  );
}

export default App;
