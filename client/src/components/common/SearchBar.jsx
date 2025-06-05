import React from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    return (
        <>
            <form action="">
               <div className='flex space-x-3'>
                 <div className=" w-full bg-slate-900  rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-gray-500">
                    <input
                        type="search"
                        placeholder="Search"
                        className="grow w-full outline-none border-0 bg-transparent"

                    />
                    
                </div>
                  <button>
                    <IoIosSearch  className='text-4xl p-2 hover:cursor-pointer hover:bg-slate-600 rounded-full duration-300' />
                </button>
               </div>
              

            </form>

        </>
    )
}

export default SearchBar