import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const { user } = useSelector((state: any) => state.user);
  console.log("Login info :", user);
  return (
    <div>
      <h3>Welcome! {user && user.email}</h3>
      <Link className=" underline text-xs" href="/create-user">Create a user</Link>
    </div>
  );
};

export default AdminDashboard;
