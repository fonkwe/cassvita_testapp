import React from "react";

export default function Header() {
  return (
    <div className=" bg-white flex justify-between border-[var(--primary-text-color)] shadow-md py-1 px-6">
      <div>
        <p className=" sub-heading">search</p>
      </div>
      <div className=" flex">
        <p className=" sub-heading">usr</p>
        <p className=" px-3 sub-heading">no</p>
        <img className=" rounded-full w-5 h-5" src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366__340.png" alt="Profile" />
      </div>
    </div>
  );
}
