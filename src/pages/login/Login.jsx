import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome to MUJ Social</h1>
          <p><h2>
          Welcome to MUJ Social, where connections are made, ideas are shared, and friendships flourish in our vibrant university community!
          </h2></p>
          <span><b><h3>Don't you have an account?</h3></b></span>
          <Link to="/register">
            <button><h3>Register</h3></button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}><h3>Login</h3></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
