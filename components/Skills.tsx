import React from 'react'
import SkillsItem from './SkillsItem';
import SkillsLanguages from './SkillsLanguages';

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#02050a] flex flex-col text-center'>
        <div>
            <h1 className='font-bold text-white text-[50px] mb-[2rem] mx-auto'>
                Education & <span className='text-yellow-400'>Skills</span>
            </h1>
        </div>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] items-center'>
            <div>
                <SkillsItem title="React Developer" year="2023- 2024"/>
                <SkillsItem title="MERN STACK Developer" year="2023- 2024"/>
                <SkillsLanguages 
                    skill1="HTML"
                    skill2="CSS"
                    skill3="JavaScript"
                    level1="[91%]"
                    level2="[88%]"
                    level3="[80%]"
                />
            </div>
            <div>
                <SkillsItem title="Next Js Developer" year="2023- 2024"/>
                <SkillsItem title="Node Js Developer" year="2023- 2024"/>
                <SkillsLanguages 
                    skill1="React Js"
                    skill2="Next Js"
                    skill3="TypeScript"
                    level1="[81%]"
                    level2="[78%]"
                    level3="[60%]"
                    />
            </div>
            <div>
                <SkillsItem title="Python Developer" year="2023- 2024"/>
                <SkillsItem title="Django Developer" year="2023- 2024"/>
                <SkillsLanguages 
                    skill1="Python"
                    skill2="Django"
                    skill3="JavaScript"
                    level1="[81%]"
                    level2="[78%]"
                    level3="[60%]"
                />
            </div>
        </div>
    </div>
  )
}

export default Skills;
