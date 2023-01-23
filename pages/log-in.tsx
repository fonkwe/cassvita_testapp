import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { corsWretch } from "../helpers/wretchCores";
import { useDispatch } from "react-redux";
import { login } from "../src/store";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      .url("https://cassvita-backend.onrender.com/api/v1/auth/login")
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
    <div className=" m-auto w-1/2 mt-10">
      {loading && <p>Loggin in...</p>}

      <h2 className="">Login</h2>
      {error ? (
        <p>
          {errorMessage}
          <Link href="" onClick={() => setError(false)}>
            Try again
          </Link>
        </p>
      ) : (
        <form onSubmit={userLogin}>
          <input
            className=" border rounded-sm"
            type="email"
            placeholder="Email"
            name="email"
          />
          <br />
          <input
            className=" border rounded-sm"
            type="password"
            placeholder="Password"
            name="password"
          />
          <br />
          <Link className=" underline text-xs" href="/forget-password">
            Forgot password?
          </Link>
          <br />
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white p-1 rounded text-sm"
            type="submit"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
