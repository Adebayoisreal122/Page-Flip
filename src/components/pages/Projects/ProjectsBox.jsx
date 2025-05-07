import React from 'react'

const ProjectsBox = ({ProjectData}) => {
  return (
    <div>
        <div className='grid grid-cols-2 md:grid-cols-2  gap-1 mt-5'>

        {ProjectData.map((data, index) => {
            return (
                <div key={index} className=' items-center justify-center h-[160px] gap-2 p-3  rounded-lg shadow-md'>
                <img src={data.image} alt="" className='w-full h-full object-cover my-2 rounded-xl'/>
                {/* details section  */}
                <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold'>{data.title}</h1>
                <p className='line-clamp-2'>{data.description}</p>
                <a className='bg-orange-500 flex items-center justify-center font-bold text-white px-4 py-2 rounded-md hover:bg-orange-600' href={data.previewLink} target="_blank" rel="noreferrer">View Project</a>
                </div>

            </div>
            )
        })
    }
    </div>
    </div>
  )
}

export default ProjectsBox