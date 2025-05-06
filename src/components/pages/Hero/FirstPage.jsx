import React from 'react'
import personImg from '../../../assets/Hero.jpg'

const FirstPage = () => {
  return (
    <div className='h-full'>
        <main className='h-full w-full page-shadow'>
    <div>
        {/* Image section */}
<div>
<img src={personImg} alt="" className='w-[200px] mx-auto'/>
</div>
{/* Text section */}
<div className='p-2 gap-2 flex flex-col justify-center'>
<p className=' uppercase font-bold text-orange-500'>Hello!</p>
<p className='text-3xl font-bold text-black/80'>i'm Isrealight</p>
<p className=' text-black/75'>Full Stack Developer</p>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo labore nobis nulla magni porro? Maiores libero soluta tenetur nulla cumque.
</p>
<a href="mailto:adebayooluwaferanmi112@gmail.com" className='mx-auto w-50 text-center text-white font-bold bg-amber-600 p-2 rounded-2xl  border border-orange-500'>Hire me</a>
</div>

    </div>
        </main>
        </div>
  )
}

export default FirstPage