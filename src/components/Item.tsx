import React from "react";

type Item = {
  icon: string;
  title: string;
  description: string;
  updated: Date;
};

export default function Item({ icon, title, description, updated }: Item) {
  return (
    <div className=" bg-white mx-6 max-w-xs">
      <div>
        <p className=" btn-inactive text-xs text-center pt-3">{icon}</p>
        <h3 className=" text-[var(--black)] text-sm font-bold text-center py-3">{title}</h3>
        <p className=" text-[var(--secondary-text-color)] text-xs text-center pb-4">{description}</p>
      </div>

      <div className=" flex justify-between shadow-inherit border border-stone-100 py-1 ">
        <div>
          <p className=" paragraph">updated</p>
        </div>
        <div>
          <p className=" paragraph">updated</p>
        </div>
      </div>
    </div>
  );
}
