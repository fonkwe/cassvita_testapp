import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { corsWretch } from "../helpers/wretchCores";
import { useDispatch } from "react-redux";
import { login } from "../src/store";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  console.log("Base URL: ", base_url);

  // User login function
  const userLogin = async (e: any) => {
    e.preventDefault();

    //destructuring email and password fields values
    const { email, password } = e.target;
    let loginData = { email: email.value, password: password.value };
    dispatch(login(loginData));
    setLoading(true);

    // Sending a post request with wretch
    await corsWretch
      .url(`${base_url}/auth/login`)
      .post({
        email: email.value,
        password: password.value,
      })
      .res((response) => {
        // Getting the response data from post request
        response.json().then((data) => {
          console.log("Data ", data);
          if (data.status === "Success") {
            setLoading(false);
            router.push("/admin-dashboard");
          }
        });
      })
      .catch((err) => {
        console.log("Error: ", err.message);
        setLoading(false);
        setError(true);
        setErrorMessage("Login failed");
      });
  };

  return (
    <div className=" grid h-screen place-items-center">
      {/* {loading && <p>Loggin in...</p>} */}

      {error ? (
        <p>
          {errorMessage}
          <Link href="" onClick={() => setError(false)}>
            Try again
          </Link>
        </p>
      ) : (
        <form onSubmit={userLogin}>
          <h1 className=" heading mb-3">Login</h1>
          <p className=" sub-heading mb-7">Login to Cassvita</p>
          <label className=" sub-heading">Email</label> <br />
          <input
            className=" inputs"
            type="email"
            placeholder="Email"
            name="email"
          />
          <br />
          <label className=" sub-heading">Password</label> <br />
          <input
            className=" inputs"
            type="password"
            placeholder="Password"
            name="password"
          />
          <br />
          <p className=" paragraph">Enter a valid email address and password</p>
          <br />
          <button className=" btn-active w-full" type="submit">
            {loading ? "Loggin in..." : "Login"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
