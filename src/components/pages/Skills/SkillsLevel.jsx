import React from 'react'

const SkillsLevel = ({skillName, skillLevel}) => {
  return (
    <div className='mt-4 '>
        <div className='flex justify-between items-end'>
            <p className='font-bold text-lg'>{skillName}</p>
            <p className='text-sm text-gray-500'>{skillLevel}</p>
        </div>
        <div className='w-full bg-gray-200 rounded-full'></div>
        <div style={{width: `${skillLevel}`}} className='h-2 rounded-full bg-orange-500'></div>
    </div>
  )
}

export default SkillsLevel