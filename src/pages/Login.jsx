import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
  const loginData = {
    email,
    password,
  };

  console.log(loginData);
};
  return (
    <div>
      <Navbar />

      <h1>Login Page</h1>

      <form>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <br />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>

      <Footer />
    </div>
  );
}

export default Login;
