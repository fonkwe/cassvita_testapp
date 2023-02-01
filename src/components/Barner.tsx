import React from "react";

export default function Barner() {
  return (
    <section className=" flex justify-between p-6 mt-20">
      <div>
        <h1 className=" heading">Products</h1>
      </div>
      <div className="flex items-center">
        <div> 
          <button className="flex btn-inactive text-xs"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v12.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z" clipRule="evenodd" />
            </svg>
             Import
          </button>
        </div>
          <div>
           <button className=" flex btn-inactive px-4 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
               <path fill-rule="evenodd" d="M10 18a.75.75 0 01-.75-.75V4.66L7.3 6.76a.75.75 0 11-1.1-1.02l3.25-3.5a.75.75 0 011.1 0l3.25 3.5a.75.75 0 01-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0110 18z" clip-rule="evenodd" />
               </svg>Export
            </button>
          </div>
        
        
        <button className=" btn-active py-5 px-5 text-xs font-large">Create User</button>
      </div>
    </section>
  );
}
