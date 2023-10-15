import React from 'react'
import { PiCaretRightBold } from 'react-icons/pi'
import { BiChevronDown } from "react-icons/bi";


const Product = ({ img, name }) => {
    return (
        <div className='font-sans flex items-center justify-between px-4 mt-4 hover:scale-105 transition-transform duration-100 cursor-pointer'>
            <div className='flex items-center'>
                <div className='w-[6rem] h-[4rem] mr-4 rounded-md'>
                    <img className='w-full h-full rounded-md' src={img} />
                </div>
                <div className='space-y-1 mr-4'>
                    <p className='text-[17px] md:text-[20px] font-sans font-bold'>{name}</p>
                    <p className='text-[13px] md:text-[15px] tracking-tighter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                </div>
                <p className='lg:hidden'><PiCaretRightBold /></p>
            </div>
            <div className='hidden lg:flex justify-center items-center space-x-16 px-4 font-medium text-[18px] font-sans'>
                <p>32 in stock</p>
                <p className='font-bold'>$45.99</p>
                <p>20</p>
            </div>
        </div>
    )
}

export default Product