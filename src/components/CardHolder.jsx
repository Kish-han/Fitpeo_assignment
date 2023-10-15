import React from 'react'
import Cards from './Cards'

const CardHolder = () => {
    return (
        <div className=' w-full grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 xl:pl-3 xl:grid-cols-4 '>
            <Cards title='Earning' money='198K' per='&#8593;37.8%' icon='TbCurrencyRupee' />
            <Cards title='Orders' money='2.4K' per='&#8595;2%' red icon='CgNotes'/>
            <Cards title='Balance' money='2.4K' per='&#8595;2%' red icon='TfiWallet'/>
            <Cards title='Total Sales' money='89K' per='&#8593;11%' icon='BsHandbag'/>
        </div>
    )
}

export default CardHolder