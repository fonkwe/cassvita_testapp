import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function Customer() {
  return (
          <div className='w-full ml-5 mb-5 shadow-sm overflow-hidden'>
            <div className="relative flex  w-full h-20 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-left h-full w-20 text-gray-300">
              <fieldset className="border border-solid ml-2 mb-5 w-20 border-gray-300 p-3">
                 <legend className="text-sm text-black-100">Search Customer</legend>
                 {/* <MagnifyingGlassIcon className="h-5 w-5"/> */}
                 <input
                    type="text"
                    id="search"
                  /> 
              </fieldset>  
              </div>     
            </div>
          </div>
  )
}
