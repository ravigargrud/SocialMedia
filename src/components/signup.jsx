import { useContext } from "react";
import { UserContext } from "../userContext.jsx";

const SignUp = () => {
  const { signUpUser } = useContext(UserContext);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={signUpUser} className="space-y-4">
          <input 
            id="userName" 
            type="text" 
            placeholder="Enter your name" 
            className="border border-gray-300 rounded-md p-2 w-full" 
          />
          <input 
            id="userEmail" 
            type="email" 
            placeholder="Enter your email" 
            className="border border-gray-300 rounded-md p-2 w-full" 
          />
          <input 
            id="userPassword" 
            type="password" 
            placeholder="Enter your password" 
            className="border border-gray-300 rounded-md p-2 w-full" 
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
