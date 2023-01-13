import React from "react";
import axios from "axios";

const ResetPassword = () => {
  const resetPassword = async (e: any) => {
    try {
      e.preventDefault();
      const { password, confirmPassword, link } = e.target;
      const response = await axios.post(link, {
        newPassword: password.value,
        newPasswordConfirm: confirmPassword.value,
      });
      console.log("Response: " + response);
    } catch (err) {
      console.log("Login error", err);
    }

    // console.log("Email", e.target.email.value);
  };

  return (
    <div>
      <h3>Reset your password</h3>
      <form onSubmit={resetPassword}>
        <input type="password" placeholder="New password" name="password" />{" "}
        <br />
        <input
          type="password"
          placeholder="Confirm new password"
          name="confirmPassword"
        />
        <input
          type="text"
          placeholder="Enter the link sent to your email"
          name="link"
        />
        <br />
        <button type="submit"> Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
