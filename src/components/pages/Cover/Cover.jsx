import React from 'react'

const Cover = ( {CoverImg, title} ) => {

    const CoverStyle = {
        backgroundImage: `url(${CoverImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
       
    };
  return (
    <div className='h-full ' style={CoverStyle}>
     <div className='flex items-center justify-center h-full'>
        <h1 className='text-4xl text-white font-bold'>{title}</h1>
     </div>
    </div>
  )
}

export default Cover
