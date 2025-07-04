import React from 'react'
import { useDispatch } from 'react-redux';
import {setSearch} from "../redux/slices/SearchSlice"

const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <nav className=' bg-amber-100 shadow-md mb-7'>
        <div className='flex flex-col lg:flex-row justify-between mx-7 py-3'>
            <div>
            <h3 className='text-xl font-bold text-gray-600'>
                {new Date().toUTCString ().slice(0,16)}</h3> 
                <h1 className='text-2xl font-bold text-amber-800 tracking-wide transform transition duration-300 hover:scale-110 hover:text-amber-700 animate-slideDown'>Flavoro Foods</h1>
            </div>
            <div className='py-2'>
                <input type="search" 
                name='search' id=''
                placeholder='Search here'
                autoComplete='off'
                onChange={(e)=>dispatch(setSearch(e.target.value))}
                className='p-3 border border-gray-400 text-sm rounded-lg 
                bg-gray-100 outline-none w-full lg:w-[25vw]
                focus:ring-2 focus:ring-amber-400 
                focus:border-amber-400 
                placeholder-gray-500 text-gray-700 
                shadow-md hover:shadow-amber-200 transition-shadow duration-300"'
                
                />
            </div>
        </div>
    </nav>
  )
}

export default Navbar