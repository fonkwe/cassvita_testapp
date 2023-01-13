import React from "react";
import axios from "axios";

const ChangePassword = () => {
  const passwordUpdate = async (e: any) => {
    try {
      e.preventDefault();
      const { oldPassword, newPassword, confirmNewPassword } = e.target;
      const response = await axios.post(
        "https://cassvita-backend.onrender.com/api/v1/users/updatePassword",
        {
          oldPassword: oldPassword.value,
          newPassword: newPassword.value,
          confirmNewPassword: confirmNewPassword.value,
        }
      );
      console.log("Response: " + response);
    } catch (err) {
      console.log("Error updating password", err);
    }

    // console.log("Email", e.target.email.value);
  };
  return (
    <div>
      <h3>Change Password</h3>
      <form onSubmit={passwordUpdate}>
        <input
          type="password"
          placeholder="Old password"
          name="oldPassword"
          required
        />{" "}
        <br />
        <input
          type="password"
          placeholder="New password"
          name="newPassword"
          required
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Confirm new password"
          name="confirmNewPassword"
          required
        />
        <br />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
