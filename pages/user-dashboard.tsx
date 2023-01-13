import Link from "next/link";
import React from "react";
import UpdateUser from "./update-user";

const UserDashbaord = () => {
  return (
    <div>
      <h4>User Dashbaord</h4>
      <Link href="/update-user">Update user</Link> <br />
      <Link href="/change-password">Change password</Link>
    </div>
  );
};

export default UserDashbaord;
