import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function Customer() {
  return (
              <div className='w-full ml-5 mb-5 shadow-sm overflow-hidden'>
                <div className="relative flex  w-full h-full rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                  <div className="grid place-items-left h-full w-20 text-gray-300">
                    <fieldset className="border border-solid w-20 border-gray-300 p-1 m-5 rounded-lg">
                     <legend className="text-sm text-black-200 ">Search Customer</legend>
                                 <MagnifyingGlassIcon className="h-8 w-8 m-2"/>
                              <input
                                type="text"
                                id="search"
                              /> 

                              {/* <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> */}
                    </fieldset>  
                  </div>     
                </div>
              </div>
  )
}
