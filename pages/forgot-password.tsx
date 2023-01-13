import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ForgetPassword = () => {
  const router = useRouter();

  const forgotPassword = async (e: any) => {
    try {
      e.preventDefault();
      const { email } = e.target;
      const user = await axios.post(
        "https://cassvita-backend.onrender.com/api/v1/auth/forgotPassword",
        {
          email: email.value,
        }
      );
    } catch (err) {
      console.log("Error creating user", err);
    }

    // console.log("Email", e.target.email.value);
  };

  return (
    <div>
      <p>Enter your email to recovery your password</p>
      <form onSubmit={forgotPassword}>
        <input type="email" placeholder="Enter your email" name="email" />{" "}
        <br />
        <button type="submit">Recover password</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
