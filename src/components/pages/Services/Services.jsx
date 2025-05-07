import React from 'react'
import ServiceBox from './ServiceBox'

const Services = () => {
  return (
    <div className='h-full'>
        <div className='h-full w-full p-2 page-shadow'>
            {/* heading */}
            <div className='flex flex-col items-center'>
                <h1 className='text-2xl inline-block text-center pb-1  border-b-2 border-orange-500 xl:text-3xl font-bold  text-orange-500'>
                    Services
                </h1>
            </div>
            <p className='text-slate-500 md:w-[80%] mx-auto  mt-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing Iusto.</p>
        {/* Services card */}
        <div>
        <ServiceBox/>
            </div>
        </div>
    </div>
  )
}

export default Services