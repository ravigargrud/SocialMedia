import { useContext } from "react";
import { UserContext } from "../userContext.jsx";

const SignUp = () => {

const { signUpUser } = useContext(UserContext);
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={signUpUser}>
        <input id="userName" type="text" placeholder="Enter your name" />
        <input id="userEmail" type="email" placeholder="Enter your email" />
        <input id="userPassword" type="password" placeholder="Enter your password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
