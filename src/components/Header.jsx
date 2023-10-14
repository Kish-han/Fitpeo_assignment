import React from 'react'
import { FiSearch } from 'react-icons/fi'
const Header = () => {
    return (
        <div className='flex justify-between items-center mt-6 fixed right-[2em] left-[4em] md:left-[17em] lg:left-[18em] xl:left-[20em]'>
            <div className=''>
                <p className='text-[22px] font-semibold font-sans ml-2'>
                    Hello Shahrukh 👋🏻,
                </p>
            </div>
            <div className='md:bg-[#ffff] flex items-center py-[6px] rounded-md md:px-3'>
                <FiSearch className='md:mr-2 text-[1.5em]' />
                <input type="text" placeholder="Search" className=' hidden md:block w-full h-full outline-none' />
            </div>
        </div>
    )
}

export default Header