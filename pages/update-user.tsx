import React from "react";
import Link from "next/link";
import axios from "axios";

const UpdateUser = () => {
  const userUpdate = async (e: any) => {
    try {
      e.preventDefault();
      const { email, fullName, phoneNumber } = e.target;
      const response = await axios.post(
        "https://cassvita-backend.onrender.com/api/v1/users/updateProfile",
        {
          email: email.value,
          fullName: fullName.value,
          phoneNumber: phoneNumber.value,
        }
      );
      console.log("Response: " + response);
    } catch (err) {
      console.log("Error updating user", err);
    }

    // console.log("Email", e.target.email.value);
  };

  return (
    <div>
      <h3>Update User</h3>
      <form onSubmit={userUpdate}>
        <input type="text" placeholder="Enter your full name" name="fullName" />{" "}
        <br />
        <input type="text" placeholder="Email" name="email" /> <br />
        <input
          type="number"
          placeholder="Enter your phone number"
          name="phoneNumber"
        />
        <br />
        <button type="submit">Update user</button>
      </form>
    </div>
  );
};

export default UpdateUser;
