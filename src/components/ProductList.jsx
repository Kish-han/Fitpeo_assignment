import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import Product from './Product'

const ProductList = () => {
    return (
        <div className='rounded-lg shadow-md bg-white px-2 mt-8 mb-4'>
            <div className='h-[17rem] md:h-[18.5rem] lg:h-[20rem] xl:h-[18.5rem] py-3'>
                <div className='flex items-center justify-between px-4'>
                    <p className='text-[1.4rem] font-sans font-bold'>Product Sell</p>
                    <div className='flex z-50 text-[#c2c2c2]'>
                        <div className='flex items-center px-1 py-2 rounded-lg bg-[#fafbff] mr-5'>
                            <FiSearch className='md:mr-2 text-[1.5em] ' />
                            <input className='hidden lg:flex w-full h-full bg-transparent outline-none text-[14px]' type='text' placeholder='Search' />
                        </div>
                        <div className='flex'>
                            <div className=' flex items-center text-[14px] text-[#c2c2c2] font-mono tracking-tighter bg-[#fafbff] px-2 rounded-md hidden md:flex'>
                                <p className='text-[14px]'>Last 30 days</p>
                                <BiChevronDown className='ml-[6px] text-[25px]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:flex items-center justify-between px-4 mt-5 text-[#c2c2c2] text-[15px] font-sans font-bold'>
                    <p>
                        Product Name
                    </p>
                    <div className='flex space-x-16'>
                        <p>Stock</p>
                        <p>Price</p>
                        <p>Total Sales</p>
                    </div>
                </div>
                <div className='w-[100%] h-[1px] bg-[#c2c2c2] mt-4' />
                <div className='space-y-8'>
                    <Product img="https://images.unsplash.com/photo-1510021115607-c94b84bceb1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80" name='Abstract 3D' />
                    <Product img="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" name="Sarphens Illustration" />
                </div>
            </div>
        </div>
    )
}

export default ProductList