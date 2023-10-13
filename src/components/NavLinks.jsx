import React from 'react'
import { PiCubeDuotone, PiCaretRightBold, PiKey, PiWallet } from 'react-icons/pi'
import { LuContact2 } from "react-icons/lu";
import { TbDiscount2 } from "react-icons/tb"
import { MdOutlineLiveHelp } from "react-icons/md"
const NavLinks = ({ icon, text, selected }) => {
    return (
        <div className={`${selected ? 'text-[#ffff] bg-[#2d2d69]' : 'text-[#888daa]'} flex items-center justify-between px-4 py-2 rounded-md`}>
            <div className='flex items-center'>
                {
                    icon == "PiKey" && (<PiKey className='text-[1.5em] mr-3' />)
                }
                {
                    icon == "PiCubeDuotone" && (<PiCubeDuotone className='text-[1.5em] mr-3' />)
                }
                {
                    icon == "LuContact2" && (<LuContact2 className='text-[1.5em] mr-3' />)
                }
                {
                    icon == "PiWallet" && (<PiWallet className='text-[1.5em] mr-3' />)
                }
                {
                    icon == "TbDiscount2" && (<TbDiscount2 className='text-[1.5em] mr-3' />)
                }
                {
                    icon == "MdOutlineLiveHelp" && (<MdOutlineLiveHelp className='text-[1.5em] mr-3' />)
                }

                <p className='text-[15px] font-medium'>{text}</p>
            </div>
            {
                !selected && <PiCaretRightBold className='' />
            }

        </div>
    )
}

export default NavLinks