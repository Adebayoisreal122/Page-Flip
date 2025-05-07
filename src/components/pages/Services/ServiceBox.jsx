import React from 'react'
import { AiFillLayout } from 'react-icons/ai'
import { HiMiniComputerDesktop } from 'react-icons/hi2'
import { MdOutlinePhoneAndroid, MdSecurity } from 'react-icons/md'


const ServicesData = [
    {
        id: 1,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        icon:  <HiMiniComputerDesktop className="text-purple-500 text-4xl" />,
        bgColor: "bg-purple-500/70",
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        icon:  <MdOutlinePhoneAndroid className=" text-gray-500 text-4xl" />,
        bgColor: "bg-gray-500/70",
    },
    {
        id: 3,
        title: "UI/UX Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        icon:  <AiFillLayout className="text-orange-500 text-4xl" />,
        bgColor: "bg-orange-500/70",
    },
    {
        id: 4,
        title: "Security Testing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        icon:  <MdSecurity className="text-blue-500 text-4xl" />,
        bgColor: "bg-blue-500/70",
    }
]

const ServiceBox = () => {

  return (
    <div className='h-full w-full px-2'>
        <div className='grid grid-cols-2 md:grid-cols-2 gap-1'>
            {
                ServicesData.map((service) => (
                    <div key={service.id} className={` p-3 my-2 rounded-lg ${service.bgColor}`}>
                        <div className="p-2 rounded-full bg-white/10">
                            {service.icon}
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold text-white">{service.title}</h1>
                            <p className="text-sm text-white/80">{service.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ServiceBox