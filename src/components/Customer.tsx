import React from 'react'

export default function Customer() {
  return (
          <div className='w-full ml-5 mb-5 shadow-sm overflow-hidden'>
            <div className="relative flex  w-full h-20 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-left h-full w-full text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                 </svg>
              </div>

            <input
             className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
             type="text"
             id="search"
             /> 
    </div>
</div>
  )
}
