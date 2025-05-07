import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { MdFacebook } from 'react-icons/md'

const About = () => {
  return (
    <div className='h-full'>
    <div className='h-full w-full p-2 page-shadow'>
        {/* heading */}
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl inline-block text-center pb-1  border-b-2 border-orange-500 xl:text-3xl font-bold  text-orange-500'>
                About me
            </h1>
        <p className='text-slate-500 md:w-[80%] mx-auto  mt-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing Iusto.</p>
        </div>
        {/* details section */}
        <div className='flex flex-col gap-2 mt-5'>
            <p className='text-slate-500 md:w-[80%] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo labore nobis nulla magni porro? Maiores libero soluta tenetur nulla cumque.</p>
            <br />
            <p className='text-slate-500 md:w-[80%] mx-auto text-center'>Lorem ipsum dolor sit ildfp odhj cumque.</p>
            {/* social media links */}
            <div className='flex space-x-5  mt-5'>
                <MdFacebook className='social-icons'/>
                <AiFillInstagram className='social-icons'/>
                <AiFillLinkedin className='social-icons'/>
                <AiFillGithub className='social-icons'/>
            </div>
            <br />
            {/* button links */}
            <div className='flex  space-x-4 mt-3'>
                <a href="" className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600'>Download Portfolio</a>
                <a href="" className='outline rounded-md hover:bg-orange-500 px-4 mx-auto flex items-center outline-orange-500'>Contact</a>
            </div>
            </div>
    </div>
</div>
  )
}

export default About