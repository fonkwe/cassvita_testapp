import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const router = useRouter();

  const userLogin = async (e: any) => {
    try {
      e.preventDefault();
      const { email, password } = e.target;
      const response = await axios.post(
        "https://cassvita-backend.onrender.com/api/v1/auth/login",
        {
          email: email.value,
          password: password.value,
        }
      );
      console.log("Response: " + response.data.token);
      response.data.token && router.push("/user-dashboard");
    } catch (err) {
      console.log("Login error", err);
    }

    // console.log("Email", e.target.email.value);
  };

  return (
    <div>
      <form onSubmit={userLogin}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" name="email" /> <br />
        <input type="password" placeholder="Password" name="password" />
        <br />
        <Link href="/forget-password">Forgot password?</Link> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
