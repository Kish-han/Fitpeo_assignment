import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { motion } from 'framer-motion';

const Barchart = () => {

    return (
        <div className='bg-white w-[100%] lg:w-[60%] xl:w-[65%] h-[21rem] py-[1rem] rounded-lg shadow-md xl:ml-[1rem]'>
            <div className='flex items-center justify-between px-[2rem] mb-2'>
                <div>
                    <h2 className='text-[19px] font-bold font-sans'>Overview</h2>
                    <p className='text-[12px] text-[#c2c2c2]'>Monthly Earning</p>
                </div>
                <div className=' items-center text-[14px] text-[#c2c2c2] font-mono tracking-tighter bg-[#fafbff] px-1 rounded-md hidden md:flex'>
                    <p className='text-[14px]'>Quarterly</p>
                    <BiChevronDown className='ml-[6px] text-[25px]' />
                </div>
            </div>
            <div className='flex justify-center items-baseline space-x-8 xl:space-x-10  w-[100%] '>
                <div className='flex flex-col items-center'>
                    <div className=' bg-[#f2efff] mb-3 w-[160%] h-[8rem] rounded-[10px]' />
                    <p>Jan</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className=' bg-[#f2efff] mb-3 w-[160%] h-[6rem] rounded-[10px]' />
                    <p>Feb</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className=' bg-[#f2efff] mb-3 w-[160%] h-[14rem] rounded-[10px]' />
                    <p>Mar</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className=' bg-[#f2efff] mb-3 w-[160%] h-[9rem] rounded-[10px]' />
                    <p>Apr</p>
                </div>
                <div className='md:flex flex flex-col items-center'>
                    <div className=' bg-[#f2efff] mb-3 w-[160%] h-[11.5rem] rounded-[10px]' />
                    <p>May</p>
                </div>
                <div className='hidden md:flex  flex-col items-center'>
                    <div className=' bg-[#f2efff] mb-3 w-[160%] h-[6rem] rounded-[10px]' />
                    <p>Jun</p>
                </div>
                <div className='hidden md:flex  flex-col items-center'>
                    <div className=' bg-[#f2efff] mb-3 w-[160%] h-[11.5rem] rounded-[10px]' />
                    <p>Jul</p>
                </div>
                <div className='hidden md:flex  flex-col items-center'>
                    <div className=' bg-[#5a32ea] mb-3 w-[160%] h-[14.5rem] rounded-[10px]' />
                    <p>Aug</p>
                </div>
                <div className='hidden md:flex lg:hidden xl:flex  flex-col items-center'>
                    <div className=' bg-[#f2efff] mb-3 w-[160%] h-[13rem] rounded-[10px]' />
                    <p>Sep</p>
                </div>
                <div className='hidden  xl:flex flex-col items-center'>
                    <div className=' bg-[#f2efff] mb-3 w-[160%] h-[10.5rem] rounded-[10px]' />
                    <p>Oct</p>
                </div>
                <div className='hidden  xl:flex flex-col items-center'>
                    <div className=' bg-[#f2efff] mb-3 w-[160%] h-[10rem] rounded-[10px]' />
                    <p>Nov</p>
                </div>
                <div className='hidden  xl:flex flex-col items-center'>
                    <div className=' bg-[#f2efff] mb-3 w-[160%] h-[11rem] rounded-[10px]' />
                    <p>Dec</p>
                </div>
            </div>
        </div>
    )
}

export default Barchart