import React from 'react'
import ProjectsBox from './ProjectsBox.jsx'

const Projects = ({ProjectData}) => {
  return (
    <div className='h-full'>
        <div className='h-full w-full p-2 page-shadow'>
        {/* heading */}
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl inline-block text-center pb-1  border-b-2 border-orange-500 xl:text-3xl font-bold  text-orange-500'>
                Projects
            </h1>
        <p className='text-slate-500 md:w-[80%] mx-auto  mt-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing Iusto.</p>
        </div>
        {/* Projects card */}
        <div>
            <ProjectsBox ProjectData= {ProjectData}/>
        </div>
        </div>
    </div>
  )
}

export default Projects