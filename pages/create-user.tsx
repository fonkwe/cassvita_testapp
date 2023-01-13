import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

const CreateUser = () => {
  const router = useRouter();

  const createUser = async (e: any) => {
    try {
      e.preventDefault();
      const { email, password, confirmPassword } = e.target;
      const user = await axios.post(
        "https://cassvita-backend.onrender.com/api/v1/auth/addUser",
        {
          email: email.value,
          password: password.value,
          passwordConfirm: confirmPassword.value,
        }
      );
    } catch (err) {
      console.log("Error creating user", err);
    }

    // console.log("Email", e.target.email.value);
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <h2>Create a user</h2>
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
