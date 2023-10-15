import React from 'react'
import { PieChart } from "react-minimal-pie-chart";
const PieChartHolder = () => {
    let data = [
        { value: 3.5, color: "#6a40ea" },
        { value: 4, color: "#f1effc" },
        { value: 2, color: "#f33899" },
    ];
    return (
        <div className='bg-[#fefefe] rounded-lg shadow-md w-[100%] lg:w-[35%] xl:w-[30%] h-[21rem] md:h-[28rem] lg:h-[21rem] lg:py-[1rem] lg:mx-[1rem] mt-10 lg:mt-0'>
            <div className='px-[2rem] lg:mb-5 xl:mb-0 mt-6 lg:mt-2'>
                <p className='text-[19px] font-bold font-sans'>Customers</p>
                <p className='text-[12px] text-[#c2c2c2]'>Customers that buy products</p>
            </div>
            <div className='relative'>
                <PieChart
                    center={[50, 40]}
                    data={data}
                    lineWidth={35}
                    lengthAngle={360}
                    paddingAngle={0}
                    radius={30}
                    startAngle={0}
                />
                <p className='absolute top-[32%] md:top-[34%] lg:top-[30%] xl:top-[32%] right-[40%] md:right-[43%] lg:right-[38%] xl:right-[40%] text-center leading-[1rem]'><span className='font-extrabold text-[20px]'>65%</span><br />Total New<br /> Customers</p>
            </div>
        </div>
    )
}

export default PieChartHolder