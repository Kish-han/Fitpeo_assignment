import React from 'react'
import { TbCurrencyRupee } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { TfiWallet } from "react-icons/tfi";
import { BsHandbag } from "react-icons/bs";
import { motion } from 'framer-motion';

const Cards = ({ title, money, per, red, icon }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mt-[2.5em]'>
            <div className='bg-white w-[22em] h-[160px] md:w-[18em] md:h-[142px] xl:w-[19em] xl:h-[140px]  flex items-center justify-around px-3 rounded-lg shadow-md'>
                <div className={`${icon === 'TbCurrencyRupee' ? 'bg-[#deffee]'
                    : icon === 'CgNotes' ? 'bg-[#e7dbff]' : icon === 'TfiWallet' ? 'bg-[#ccf2ff]' : 'bg-[#ffc3e6]'} w-[8em] h-[8em] rounded-full flex items-center justify-center md:mr-2`}>
                    {
                        icon === 'TbCurrencyRupee' ? <TbCurrencyRupee className='text-[#00ac4f] text-[4em] md:text-[5em] ' /> :
                            icon === 'CgNotes' ? <CgNotes className='text-[#a107fe] text-[5em] md:text-[4em] ' /> :
                                icon === 'TfiWallet' ? <TfiWallet className='text-[#0355be] text-[5em] md:text-[4em] ' /> :
                                    icon === 'BsHandbag' && <BsHandbag className='text-[#d7000a] text-[5em] md:text-[4em] ' />
                    }
                </div>
                <div className='-space-y-1 font-mono'>
                    <p className='text-[14px] text-[#c7c7c7]'>{title}</p>
                    <p className='text-[25px] font-extrabold'>₹{money}</p>
                    <p className='tracking-[-1px] text-[15px] md:text-[12px] '><span className={`${!red ? 'text-[#07a138]' : 'text-[#cd0243]'}  font-sans font-bold`}>{per}</span> this month</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Cards