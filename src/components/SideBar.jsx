import React, { useState } from 'react'
import { PiNutBold } from "react-icons/pi";
import NavLinks from './NavLinks';
import { RxHamburgerMenu } from "react-icons/rx";
import { CgCloseO } from "react-icons/cg";
import { BiChevronDown } from "react-icons/bi";
import { motion } from 'framer-motion';

const SideBar = () => {
    const [toogle, setToogle] = useState(false);

    return (
        <div>
            <div className={`${toogle ? 'hidden' : 'md:hidden'} fixed z-50`} onClick={() => { setToogle(true) }}>
                <RxHamburgerMenu className='text-[#040440] text-[2em] mt-[1em] ml-[0.5em]' />
            </div>
            <div className={`fixed ${toogle ? 'left-[0%]' : 'left-[-250%]'} md:left-0 right-1 h-[100%] transition-all duration-500 z-40`}>
                <div className={`bg-[#040440] w-[60%] md:w-[25%] lg:w-[20%] xl:w-[16%] h-full  md:block relative`}>
                    <div className='md:hidden'>
                        <CgCloseO className='text-[#F5F5F5] py-[6px] rounded-md bg-[#040440] text-[3em] top-5 -right-5 absolute' onClick={() => { setToogle(false) }} />
                    </div>
                    <div className='pt-[2em]'>
                        <div className='flex items-center pl-[10%] text-[#F5F5F5]'>
                            <PiNutBold className=" text-[2.5em] mr-2" />
                            <p className='text-[20px] font-semibold font-sans tracking-[1px]'>Dashboard</p>
                        </div>
                        <div className='px-4 mt-10 space-y-5'>
                            <NavLinks icon='PiKey' text='Dashboard' selected />
                            <NavLinks icon='PiCubeDuotone' text='Product' />
                            <NavLinks icon='LuContact2' text='Customers' />
                            <NavLinks icon='PiWallet' text='Income' />
                            <NavLinks icon='TbDiscount2' text='Promote' />
                            <NavLinks icon='MdOutlineLiveHelp' text='Help' />
                        </div>
                    </div>
                    <div className='flex items-center  absolute bottom-10 right-[25px] md:right-[5px] xl:right-[20px] left-[25px] md:left-[5px]  xl:left-[20px] text-[#888daa] bg-[#2d2d69] py-2 px-2 rounded-md'>
                        <div className='w-[35px] h-[35px] mr-3'>
                            <img className='w-full h-full object-cover rounded-full' src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                        </div>
                        <div className='mr-7 md:mr-2 lg:mr-5 xl:mr-4 leading-tight'>
                            <p className='text-[#ffff]'>Evano</p>
                            <p className='text-[10px]'>Project Manager</p>
                        </div>
                        <div>
                            <BiChevronDown className='text-[25px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar