import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
// import wretch from "wretch";
import { corsWretch } from "../helpers/wretchCores";

const CreateUser = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createUser = async (e: any) => {
    e.preventDefault();
    const { email, password, confirmPassword } = e.target;
    setLoading(true);
    await corsWretch
      .url("https://cassvita-backend.onrender.com/api/v1/auth/add-user")
      .post({
        email: email.value,
        password: password.value,
        passwordConfirm: confirmPassword.value,
      })
      .res((response) => {
        response.json().then((data) => {
          // if (data.status === "Success") {
          setLoading(false);
          console.log("Data", data);
          // }
        });
      })
      .catch((err) => {
        console.log("Error creating user: ", err.message);
        setError("User was not created");
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   setTimeout(() => {})
  // }, [])

  return (
    <div>
      <h2>Create a user</h2>
      {loading && <p>Creating user...</p>}
      <form onSubmit={createUser}>
        <input type="text" placeholder="Emial" name="email" required /> <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <br />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          required
        />
        <br />
        <button type="submit">Create user</button>
      </form>
    </div>
  );
};

export default CreateUser;
