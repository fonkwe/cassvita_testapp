import React from "react";

export default function Barner() {
  return (
    <section className=" flex justify-between p-6">
      <div>
        <h1 className=" heading">Products</h1>
      </div>
      <div>
        <button className=" btn-inactive text-xs">Import</button>
        <button className=" btn-inactive px-4 text-xs">Export</button>
        <button className=" btn-active py-1 px-2 text-xs font-medium">Create User</button>
      </div>
    </section>
  );
}
