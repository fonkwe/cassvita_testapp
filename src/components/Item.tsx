import React from "react";
import Image from "next/image";

type Item = {
  image: string;
  title: string;
  description: string;
  updated: string;
};

export default function Item({ image, title, description, updated }: Item) {
  return (
    <div className=" bg-white mx-4 shadow-sm max-h-6/12 ">
      <div>
        <Image src={image} alt="" height={40} width={40} className="mx-auto py-3" />
        {/* <p className=" btn-inactive text-xs text-center pt-3">{icon}</p> */}
        <h3 className=" text-[var(--black)] text-sm font-bold text-center py-3">
          {title}
        </h3>
        <p className=" text-[var(--secondary-text-color)] text-xs text-center py-3 pb-4">
          {description}
        </p>
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
