import React from 'react'
import SkillsLevel from './SkillsLevel'

const Skills = () => {
  return (
    <div className='h-full'>
        <div className='h-full w-full px-2 page-shadow'>
            {/* heading */}
            <div>
                <div className='relative'>
                    <div className='text-center text-6xl xl:text-8xl font-bold text-black/10'>
                        SKILLS
                    </div>
                    <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl xl:text-3xl  text-orange-500'>
                        Skills
                    </h1>
                </div>
            </div>
            {/* skills */}
            <div>
                <SkillsLevel skillName="HTML" skillLevel={"80%"} />
                <SkillsLevel skillName="CSS" skillLevel={"90%"} /> 
                <SkillsLevel skillName="JavaScript" skillLevel={"75%"} />
                <SkillsLevel skillName="React" skillLevel={"85%"} />
                <SkillsLevel skillName="Node.js" skillLevel={"75%"} />
                <SkillsLevel skillName="Express" skillLevel={"60%"} />
                <SkillsLevel skillName="MongoDB" skillLevel={"80%"} />
            </div>
        </div>
    </div>
  )
}

export default Skills